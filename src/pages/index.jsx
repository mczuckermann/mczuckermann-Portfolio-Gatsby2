import React, { useState, useRef, useEffect } from "react"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Home from "../components/Home"
import About from "../components/About"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import "./index.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

const Index = () => {
  const [scrollHeight, setScrollHeight] = useState(0)
  const homeSection = useRef(null)
  const aboutSection = useRef(null)
  const projectSection = useRef(null)
  const contactSection = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener("scroll", checkScrollHeight)
    checkScrollHeight()
  }, [])

  const checkScrollHeight = () => {
    setScrollHeight(window.scrollY)
  }

  const scrollToHomeSection = () => {
    window.scrollTo({
      left: 0,
      top: homeSection.current.offsetTop - 74,
      behavior: `smooth`,
    })
  }

  const scrollToAboutSection = () =>
    window.scrollTo({
      left: 0,
      top: aboutSection.current.offsetTop - 74,
      behavior: `smooth`,
    })

  const scrollToProjectSection = () =>
    window.scrollTo({
      left: 0,
      top: projectSection.current.offsetTop - 74,
      behavior: `smooth`,
    })

  const scrollToContactSection = () =>
    window.scrollTo({
      left: 0,
      top: contactSection.current.offsetTop - 74,
      behavior: `smooth`,
    })

  return (
    <div>
      <SEO
        title="Zuckermann | Portfolio"
        description="Showcase of accomplishments and projects by Matt Zuckermann"
        image=""
        keywords={[
          `Programming`,
          `Full Stack`,
          `Matt Zuckermann`,
          `Front End`,
          `Back End`,
          `Web Development`,
        ]}
      />
      <Header
        scrollHeight={scrollHeight}
        onClickFunctions={{
          scrollToHomeSection,
          scrollToAboutSection,
          scrollToProjectSection,
          scrollToContactSection,
        }}
      />
      <Home refHome={homeSection} />
      <About refAbout={aboutSection} />
      <Projects refProjects={projectSection} />
      <Footer refContact={contactSection} onClick={scrollToHomeSection} />
    </div>
  )
}

export default Index
