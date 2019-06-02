import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
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

  // scrollToRef = () => {
  //   let { value } = event.target;
  //   window.scrollTo({
  //     left: 0,
  //     top: value.current.offsetTop - 74,
  //     behavior: `smooth`,
  //   })
  // }

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

  scrollToTop = () =>
    window.scrollTo({
      left: 0,
      top: this.top.current.offsetTop,
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
          onClickAboutSection={this.scrollToAboutSection}
          onClickProjectSection={this.scrollToProjectSection}
          onClickContactSection={this.scrollToContactSection}
        />
        <About refabout={this.aboutSection} />
        <Projects refprojects={this.projectSection} />
        <Footer refcontact={this.contactSection} onClick={this.scrollToTop} />
      </div>
    )
  }
}

export default Index
