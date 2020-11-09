import "./index.css"
import React, { useState, useRef, useEffect, createContext } from "react"
import { throttle } from "lodash"
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
  const [refIndex, setRefIndex] = useState(1)

  const scrollToSection = throttle(
    (section) => {
      window.scrollTo({
        left: 0,
        top: section.current.offsetTop - 48,
        behavior: "smooth",
      })
    },
    1000,
    { trailing: false }
  )

  const keyDownListenerFunction = (e) => {
    if (refIndex !== 0 && e.key === "ArrowUp") {
      setRefIndex(refIndex - 1)
    } else if (refIndex !== allRefs.length - 1 && e.key === "ArrowDown") {
      setRefIndex(refIndex + 1)
    }
  }

  const mouseListenerFunction = (e) => {
    if (e.wheelDelta > 0 && refIndex !== 0) {
      setRefIndex(refIndex - 1)
    } else if (e.wheelDelta < 0 && refIndex !== allRefs.length - 1) {
      setRefIndex(refIndex + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyDownListenerFunction)
    window.addEventListener("mousewheel", mouseListenerFunction)
    return () => {
      window.removeEventListener("keydown", keyDownListenerFunction)
      window.removeEventListener("mousewheel", mouseListenerFunction)
    }
  }, [keyDownListenerFunction, mouseListenerFunction])

  useEffect(() => scrollToSection(allRefs[refIndex]), [refIndex])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        allRefs,
        value,
        setValue,
        scrollToSection,
        setRefIndex,
        refIndex,
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
