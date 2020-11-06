import "./index.css"
import React, { useState, useRef, useEffect, createContext } from "react"
import PropTypes from "prop-types"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Home from "../components/Home"
import Projects from "../components/Projects"
import About from "../components/About"
import Footer from "../components/Footer"
export const GlobalContext = createContext()

const Index = () => {
  const homeSection = useRef(null)
  const projectSection = useRef(null)
  const aboutSection = useRef(null)
  const contactSection = useRef(null)
  const allRefs = [homeSection, projectSection, aboutSection, contactSection]
  const [value, setValue] = useState(0)
  const [refIndex, setRefIndex] = useState(0)
  const keyMap = new Map()

  const scrollToSection = (section) => {
    window.scrollTo({
      left: 0,
      top: section.current.offsetTop - 48,
      behavior: "smooth",
    })
  }

  const keyDownListenerFunction = (e) => {
    keyMap.set(`${e.key}`, "exists")
    if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === " ")
      e.preventDefault()
    if (
      refIndex !== 0 &&
      (e.key === "ArrowUp" || (keyMap.has("Shift") && keyMap.has(" ")))
    )
      setRefIndex(refIndex - 1)
    else if (
      (e.key === "ArrowDown" || e.key === " ") &&
      refIndex !== allRefs.length - 1
    )
      setRefIndex(refIndex + 1)
    // Once refIndex has been switched, scroll to that ref
    window.scrollTo({
      left: 0,
      top: allRefs[refIndex]?.current?.offsetTop - 48,
      behavior: "smooth",
    })
  }

  const keyUpListenerFunction = (e) => {
    keyMap.delete(e.key)
  }

  const mouseListenerFunction = (e) => {
    e.preventDefault()
    if (e.wheelDelta > 0 && refIndex !== 0) setRefIndex(refIndex - 1)
    else if (e.wheelDelta < 0 && refIndex !== allRefs.length - 1)
      setRefIndex(refIndex + 1)

    window.scrollTo({
      left: 0,
      top: allRefs[refIndex].current.offsetTop - 48,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    const keyDownListener = window.addEventListener(
      "keydown",
      keyDownListenerFunction
    )
    const keyUpListener = window.addEventListener(
      "keyup",
      keyUpListenerFunction
    )
    const mouseListener = window.addEventListener(
      "mousewheel",
      mouseListenerFunction
    )
    return () => {
      window.removeEventListener(keyDownListener, keyDownListenerFunction)
      window.removeEventListener(keyUpListener, keyUpListenerFunction)
      window.removeEventListener(mouseListener, mouseListenerFunction)
    }
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        allRefs,
        value,
        setValue,
        scrollToSection,
        setRefIndex,
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
      <div className="parent">
        <section ref={homeSection}>
          <Home />
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
      </div>
    </GlobalContext.Provider>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `Zuckermann | Portfolio`,
}

export default Index
