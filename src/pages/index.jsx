import "./index.css"
import React, { useState, useRef, useEffect, createContext } from "react"
import { useSessionStorage } from "../hooks/useSessionStorage"
import { throttle } from "lodash"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import SEO from "../components/SEO"
import Header from "../components/Header"
import BackgroundImage from "../components/BackgroundImage"
import Home from "../components/Home"
import Projects from "../components/Projects"
import About from "../components/About"
import Footer from "../components/Footer"
export const GlobalContext = createContext()

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 630,
      md: 750,
      lg: 1475,
      xl: 1920,
    },
  },
})

const App = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const arrowRef = useRef(null)
  const [scrollLeft, setScrollLeft] = useSessionStorage("scrollLeft", 0)

  const homeSection = useRef(null)
  const projectSection = useRef(null)
  const aboutSection = useRef(null)
  const contactSection = useRef(null)
  const allRefs = [homeSection, projectSection, aboutSection, contactSection]

  const [backgroundIsLoaded, _setBackgroundIsLoaded] = useState(false)
  const backgroundIsLoadedRef = useRef(backgroundIsLoaded)
  const setBackgroundIsLoaded = (data) => {
    backgroundIsLoadedRef.current = data
    _setBackgroundIsLoaded(data)
  }

  const [refIndex, _setRefIndex] = useSessionStorage("refIndex", 0)
  const refIndexRef = useRef(refIndex)
  const setRefIndex = (data) => {
    refIndexRef.current = data
    _setRefIndex(data)
  }
  const [value, setValue] = useState(0)

  const [scrollDistance, _setScrollDistance] = useState(0)
  const scrollDistanceRef = useRef(scrollDistance)
  const setScrollDistance = (data) => {
    scrollDistanceRef.current = data
    _setScrollDistance(data)
  }

  const [startY, _setStartY] = useState(0)
  const startYRef = useRef(startY)
  const setStartY = (data) => {
    startYRef.current = data
    _setStartY(data)
  }

  const [scrollButtonDown, _setScrollButtonDown] = useState(false)
  const scrollButtonDownRef = useRef(scrollButtonDown)
  const setScrollButtonDown = (data) => {
    scrollButtonDownRef.current = data
    _setScrollButtonDown(data)
  }

  const scrollToSection = (section) => {
    window.scrollTo({
      left: 0,
      top: section.current.offsetTop - 48,
      behavior: "smooth",
    })
  }

  const keyDownListenerFunction = throttle(
    (e) => {
      if (refIndexRef.current === 0 && !backgroundIsLoadedRef.current) {
        return
      } else {
        if (refIndexRef.current !== 0 && e.key === "ArrowUp") {
          setRefIndex(refIndexRef.current - 1)
        } else if (
          refIndexRef.current !== allRefs.length - 1 &&
          e.key === "ArrowDown"
        ) {
          setRefIndex(refIndexRef.current + 1)
        } else if (refIndexRef.current === 1 && e.key === "ArrowLeft") {
          setScrollLeft(arrowRef.current.scrollLeft - scrollDistanceRef.current)
        } else if (refIndexRef.current === 1 && e.key === "ArrowRight") {
          setScrollLeft(arrowRef.current.scrollLeft + scrollDistanceRef.current)
        }
      }
    },
    500,
    { trailing: false }
  )

  const mouseListenerFunction = throttle(
    (e) => {
      if (refIndexRef.current === 0 && !backgroundIsLoadedRef.current) {
        return
      } else {
        if (e.deltaY < 0 && refIndexRef.current !== 0) {
          setRefIndex(refIndexRef.current - 1)
        } else if (e.deltaY > 0 && refIndexRef.current !== allRefs.length - 1) {
          setRefIndex(refIndexRef.current + 1)
        }
      }
    },
    1500,
    { trailing: false }
  )

  const touchStartListenerFunction = throttle(
    (e) => {
      if (refIndexRef.current === 0 && !backgroundIsLoadedRef.current) {
        return
      } else {
        if (
          /makeStyles-netflixButtonImage-[0-9]*/i.test(e.target.className) ||
          /^jss[0-9]*/i.test(e.target.className)
        ) {
          setScrollButtonDown(true)
          return
        } else {
          setStartY(e.touches[0].clientY)
        }
      }
    },
    500,
    { trailing: false }
  )

  const touchEndListenerFunction = throttle(
    (e) => {
      if (refIndexRef.current === 0 && !backgroundIsLoadedRef.current) {
        return
      } else {
        if (scrollButtonDownRef.current) {
          setScrollButtonDown(false)
          return
        } else {
          const endY = e.changedTouches[0].clientY
          if (endY > startYRef.current && refIndexRef.current !== 0) {
            setRefIndex(refIndexRef.current - 1)
          } else if (
            endY < startYRef.current &&
            refIndexRef.current !== allRefs.length - 1
          ) {
            setRefIndex(refIndexRef.current + 1)
          }
        }
      }
    },
    500,
    { trailing: false }
  )

  useEffect(() => {
    // disable react-dev-tools for this project
    if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
      for (let [key, value] of Object.entries(
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__
      )) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
          typeof value == "function" ? () => {} : null
      }
    }

    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)

    window.addEventListener("keydown", keyDownListenerFunction)
    window.addEventListener("wheel", mouseListenerFunction)
    window.addEventListener("touchstart", touchStartListenerFunction)
    window.addEventListener("touchend", touchEndListenerFunction)
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    })
    return () => {
      window.removeEventListener("keydown", keyDownListenerFunction)
      window.removeEventListener("mousewheel", mouseListenerFunction)
      window.removeEventListener("touchstart", touchStartListenerFunction)
      window.removeEventListener("touchend", touchEndListenerFunction)
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
      })
    }
  }, [])

  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: allRefs[refIndex].current.offsetTop - 48,
    })

    if (windowWidth <= 850 && windowHeight <= 550)
      setScrollDistance(windowWidth * 0.48)
    else if (windowWidth <= 500) setScrollDistance(windowWidth * 0.86)
    else if (windowWidth <= 1000) setScrollDistance(windowWidth * 0.883)
    else if (windowWidth <= 1305) setScrollDistance(windowWidth * 0.75)
    else setScrollDistance(windowWidth * 0.5)
  }, [windowWidth, windowHeight])

  useEffect(() => {
    arrowRef.current.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    })
  }, [scrollLeft])

  useEffect(() => {
    scrollToSection(allRefs[refIndex])
    setTimeout(() => setValue(refIndex), 300)
  }, [refIndex])

  return (
    <MuiThemeProvider theme={theme}>
      <GlobalContext.Provider
        value={{
          allRefs,
          value,
          setValue,
          scrollToSection,
          refIndex,
          setRefIndex,
          arrowRef,
          scrollLeft,
          setScrollLeft,
          windowWidth,
          scrollDistance,
          backgroundIsLoaded,
          setBackgroundIsLoaded,
        }}
      >
        <SEO
          title="Zuckermann | Portfolio"
          description="Showcase of accomplishments and projects by Matt Zuckermann"
          image=""
          keywords={[
            `Matt Zuckermann`,
            `Programming`,
            `Web Developer`,
            `Software Engineer`,
            `Full Stack`,
            `Front End`,
            `Back End`,
          ]}
        />
        <Header />
        <main className="parent">
          <section ref={homeSection}>
            <BackgroundImage className="homeBody">
              <Home />
            </BackgroundImage>
          </section>
          <section ref={projectSection}>
            <Projects />
          </section>
          <section ref={aboutSection}>
            <About />
          </section>
          <section ref={contactSection}>
            <Footer />
          </section>
        </main>
      </GlobalContext.Provider>
    </MuiThemeProvider>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `Zuckermann | Portfolio`,
}

export default App
