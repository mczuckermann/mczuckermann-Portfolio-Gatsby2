import React, { useState } from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Footer from "../components/footer"
import "./index.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
// import iconInfo from "../json/iconInfo"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.checkScrollHeight = this.checkScrollHeight.bind(this)
    this.top = React.createRef()
    this.homeSection = React.createRef()
    this.aboutSection = React.createRef()
    this.projectSection = React.createRef()
    this.contactSection = React.createRef()
    this.state = {
      scrollHeight: 0,
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.checkScrollHeight)
  }

  checkScrollHeight = () => {
    this.setState({
      scrollHeight: window.scrollY,
    })
  }

  scrollToHomeSection = () =>
    window.scrollTo({
      left: 0,
      top: this.homeSection.current.offsetTop - 74,
      behavior: `smooth`,
    })

  scrollToAboutSection = () =>
    window.scrollTo({
      left: 0,
      top: this.aboutSection.current.offsetTop - 74,
      behavior: `smooth`,
    })

  scrollToProjectSection = () =>
    window.scrollTo({
      left: 0,
      top: this.projectSection.current.offsetTop - 74,
      behavior: `smooth`,
    })

  scrollToContactSection = () =>
    window.scrollTo({
      left: 0,
      top: this.contactSection.current.offsetTop - 74,
      behavior: `smooth`,
    })

  render() {
    return (
      <div ref={this.top}>
        <SEO
          title="Zuckermann"
          keywords={[`Programming`, `Full Stack`, `Matt Zuckermann`]}
        />
        <Header
          state={this.state}
          onClickHomeSection={this.scrollToHomeSection}
          onClickAboutSection={this.scrollToAboutSection}
          onClickProjectSection={this.scrollToProjectSection}
          onClickContactSection={this.scrollToContactSection}
        />
        <Home refhome={this.homeSection} />
        <About refabout={this.aboutSection} />
        <Projects refprojects={this.projectSection} />
        <Footer
          refcontact={this.contactSection}
          onClick={this.scrollToHomeSection}
        />
      </div>
    )
  }
}

export default Index
