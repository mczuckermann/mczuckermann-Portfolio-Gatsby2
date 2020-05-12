import "./index.css"
import React, { useState, useRef, useEffect, createContext } from "react"
import { useChain, useSpring, useSprings, config } from "react-spring"
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

  const slideRef = useRef(null)
  const slide = useSpring({
    transform:
      refIndex === 1
        ? "translateY(-868px) scale(1, 1)"
        : "translateY(0px) scale(1, 0.6)",
    ref: slideRef,
  })

  const minimizeRef = useRef(null)
  const minimize = useSpring({
    transform:
      refIndex === 0
        ? "scale(1,1) rotateX(0deg)"
        : "scale(0.85,0.85) rotateX(30deg)",
    filter: refIndex === 0 ? "saturate(100%)" : "saturate(0%)",
    ref: maximizeRef,
  })

  const maximizeRef = useRef(null)
  const maximize = useSpring({
    transform: "scale(1,1)",
    ref: maximizeRef,
  })

  const sections = [
    <Home style={minimize} />,
    <Projects style={minimize} />,
    <About style={minimize} />,
    <Footer style={minimize} />,
  ]

  useChain([minimizeRef, slideRef, maximizeRef], [0, 5, 10])
  useEffect(() => {
    const scrollEvents = ["wheel", "onwheel", "onmousewheel"]
    window.scrollTo(0, 0)
    scrollEvents.map((scrollEvent) =>
      window.addEventListener(scrollEvent, (event) => {
        if (event.deltaY < -100) {
          setRefIndex(0)
          setValue(0)
        } else if (event.deltaY > 100) {
          setRefIndex(1)
          setValue(1)
        }
      })
    )
    window.addEventListener("keypress", (event) => {
      if (event.code === 38) {
        setRefIndex(0)
        setValue(0)
      } else if (event.code === 40) {
        setRefIndex(1)
        setValue(1)
      }
    })
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        allRefs,
        value,
        setValue,
        refIndex,
        setRefIndex,
        slide,
        minimize,
        maximize,
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
      <Header setValue={setValue} />
      <div
        style={{
          position: "relative",
          height: "calc(100vh - 48px)",
          overflow: "hidden",
        }}
      >
        {sections.map((section) => section)}
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
