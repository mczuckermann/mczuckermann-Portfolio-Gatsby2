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
  const [scrollHeight, setScrollHeight] = useState(0)
  const homeSection = useRef(null)
  const projectSection = useRef(null)
  const aboutSection = useRef(null)
  const contactSection = useRef(null)
  const allRefs = [homeSection, projectSection, aboutSection, contactSection]
  const [value, setValue] = useState(0)
  const scrollToSection = (section) => {
    window.scrollTo({
      left: 0,
      top: section.current.offsetTop - 48,
      behavior: `smooth`,
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener("scroll", setScrollHeight(window.scrollY))
    setScrollHeight(window.scrollY)
  }, [])

  useEffect(() => {
    setScrollHeight(window.scrollY)
  }, [window.scrollY])

  return (
    <GlobalContext.Provider
      value={{ allRefs, value, setValue, scrollToSection }}
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
      <Header scrollHeight={scrollHeight} />
      <Home />
      <Projects />
      <About />
      <Footer />
    </GlobalContext.Provider>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Index
