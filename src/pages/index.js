import React from "react"
import Img from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer"
import imageInfo from "../json/imageInfo"
// import iconInfo from "../json/iconInfo"
import Images from "../images"
import "./index.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { Navbar, Nav } from "react-bootstrap"
import classNames from "classnames"
import navigator from "./../navigator"
// import ToggleMenu from "../components/ToggleMenu"

const images = [
  Images.image1,
  Images.image2,
  Images.image3,
  Images.image4,
  Images.image5,
  Images.image6,
  Images.image7,
  Images.image8,
]

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
      top: this.homeSection.current.offsetTop - 81,
      behavior: `smooth`,
    })

  scrollToAboutSection = () =>
    window.scrollTo({
      left: 0,
      top: this.aboutSection.current.offsetTop - 81,
      behavior: `smooth`,
    })

  scrollToProjectSection = () =>
    window.scrollTo({
      left: 0,
      top: this.projectSection.current.offsetTop - 81,
      behavior: `smooth`,
    })

  scrollToContactSection = () =>
    window.scrollTo({
      left: 0,
      top: this.contactSection.current.offsetTop - 81,
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
        <div>
          <div id="headerWithEdging">
            <div className="container-full footerEdging" />
            <Navbar
              className={classNames("header", {
                changedImageColor: window.scrollY !== 0,
              })}
              bg="light"
              expand="lg"
            >
              <Navbar.Brand
                id="nameNav"
                className={classNames("rounded", {
                  nameNavMoved: window.scrollY !== 0,
                })}
              >
                Matt Zuckermann
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav navbar-toggler" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link
                    className={classNames("navSubObjects", "rounded", {
                      navSubObjectsHover: !navigator(),
                      navSubObjectsMoved: window.scrollY !== 0,
                      navSubObjectsMovedHover: window.scrollY !== 0,
                    })}
                    style={{ color: "lightgrey" }}
                    tabIndex="0"
                    onClick={this.scrollToAboutSection}
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    className={classNames("navSubObjects", "rounded", {
                      navSubObjectsHover: !navigator(),
                      navSubObjectsMoved: window.scrollY !== 0,
                      navSubObjectsMovedHover: window.scrollY !== 0,
                    })}
                    style={{ color: "lightgrey" }}
                    tabIndex="0"
                    onClick={this.scrollToProjectSection}
                  >
                    Portfolio
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <div className="container-full footerEdging" />
          </div>
          <div
            className="container-full aboutBody rounded overflowRow"
            ref={this.aboutSection}
          >
            <h1 className="groupHeaders col-12">About Me</h1>
            <div className="row aboutMeSet">
              <div className="col-lg-12 col-md-12">
                <Img className="headShotImage" alt="Head-Shot" />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3" />
              <div className="col-lg-6 col-md-12 col-sm-12 bioBackground">
                <br />
                <p className="portfolioBio">
                  Full Stack Web Developer specializing in React, Gatsby, and
                  Node. Experienced Technical Director with a history in
                  audiovisual engineering and two Bachelor of Arts degrees in
                  Music and Communication-Media Studies. Passion for tech
                  platforms and the communities they create.
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3" />
            </div>
          </div>
          <br />
          <br />
          <div
            className="container-full projectsBody rounded overflowRow"
            ref={this.projectSection}
          >
            <div />
            <h1 className="groupHeaders groupHeaders2 col-12">Apps/Projects</h1>
            <div
              className="container-full projectsBody rounded"
              id="projectsBodyPad"
            >
              <div className="row">
                <div style={{ color: "white", fontSize: "12px" }}>
                  *For a demo login version of{" "}
                  <i>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demoPassLinks"
                      href="https://searcher-mczuckermann.herokuapp.com/"
                    >
                      Best Seller Searcher
                    </a>
                  </i>{" "}
                  or{" "}
                  <i>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demoPassLinks"
                      href="https://snippets-mczuckermann.herokuapp.com/"
                    >
                      Snippets.
                    </a>
                  </i>
                  , use the username "<u>demo@demo.com</u>" with the password "
                  <u>demo</u>"
                </div>
              </div>
              <div className="row">
                {imageInfo.map((image, index) => (
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 hiddenImage"
                    key={index}
                  >
                    <a
                      href={image.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="repoImages rounded"
                        src={images[index]}
                        alt={image.appName}
                      />
                    </a>
                    <div className="repoUrlDiv">
                      <a
                        id="noDecoration"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={image.deployLink}
                      >
                        <span
                          className={classNames(
                            "repoUrlLinks",
                            "deployUrlLinks",
                            {
                              repoUrlLinksHover: !navigator(),
                            }
                          )}
                        >
                          {image.appName}
                        </span>
                      </a>
                      <span id="paddingDivider">|</span>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={image.repoLink}
                      >
                        <span
                          className={classNames("repoUrlLinks", {
                            repoUrlLinksHover: !navigator(),
                          })}
                        >
                          <i className="fab fa-github" />
                        </span>
                      </a>
                      <div className="projectRole">{image.projectRole}</div>
                      <div className="shortBio">{image.shortBio}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <br />
        <Footer onClick={this.scrollToTop} />
      </div>
    )
  }
}

export default Index
