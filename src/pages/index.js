import React from "react"
import Img from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer"
import imageInfo from "../json/imageInfo"
import iconInfo from "../json/iconInfo"
import Images from "../images"
import "./index.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { Navbar, Nav } from "react-bootstrap"

const images = [
  Images.image1,
  Images.image2,
  Images.image3,
  Images.image4,
  Images.image5,
  Images.image6,
  Images.image7,
]

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.aboutSection = React.createRef()
    this.projectSection = React.createRef()
  }

  scrollToAboutSection = () =>
    window.scrollTo({
      left: 0,
      top: this.aboutSection.current.offsetTop,
      behavior: `smooth`,
    })

  scrollToProjectSection = () =>
    window.scrollTo({
      left: 0,
      top: this.projectSection.current.offsetTop,
      behavior: `smooth`,
    })

  render() {
    return (
      <div>
        <SEO
          title="Zuckermann"
          keywords={[`Programming`, `Full Stack`, `Matt Zuckermann`]}
        />
        <div className="container-full footerEdging" />
        <Navbar className="header" id="headerBackground" bg="light" expand="sm">
          <Navbar.Brand
            style={{ color: "white" }}
            id="nameNav"
            className="header rounded"
          >
            Matt Zuckermann
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav navbar-toggler"
            style={{
              backgroundColor: "#cbe3ef",
              borderColor: "#2e2e2c",
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                style={{ color: "white" }}
                className="navSubObjects rounded"
                tabindex="0"
                onClick={this.scrollToAboutSection}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                style={{ color: "white" }}
                className="navSubObjects rounded"
                tabindex="0"
                onClick={this.scrollToProjectSection}
              >
                Apps/Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container-full footerEdging" />
        <br />
        <br />
        <br />
        <br />
        <div
          className="container aboutBody rounded overflowRow"
          ref={this.aboutSection}
        >
          <h1 className="groupHeaders col-12">About Me</h1>
          <div className="row aboutMeSet">
            <div className="col-lg-12 col-md-7">
              <Img className="headShotImage" alt="Head-Shot" />
            </div>
            <div className="col-lg-12 col-md-5">
              <br />
              <p className="portfolioBio">
                Full Stack Web Developer specializing in React, Gatsby, and
                Node. Experienced Technical Director with a history in
                audiovisual engineering and two Bachelor of Arts degrees in
                Music and Communication-Media Studies. Passion for tech
                platforms and the communities they create.
              </p>
            </div>
          </div>
          <div className="row centerBody">
            {iconInfo.map((icon, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 documentsBody"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.docLink}
                >
                  <i className={icon.iconTag} title={icon.linkName} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <div
          className="container projectsBody rounded overflowRow"
          ref={this.projectSection}
        >
          <div />
          <h1
            className="groupHeaders col-12"
            style={{ backgroundColor: "gray", color: "black" }}
          >
            Apps/Projects
          </h1>
          <div className="container projectsBody rounded" id="projectsBodyPad">
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
                      className="repoUrlLinks deployUrlLinks"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={image.deployLink}
                    >
                      {image.appName}
                    </a>
                    <span style={{ color: "white" }} id="paddingDivider">
                      |
                    </span>
                    <a
                      className="repoUrlLinks"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={image.repoLink}
                    >
                      <i className="fab fa-github" />
                    </a>
                    <div className="projectRole">{image.projectRole}</div>
                    <div className="shortBio">{image.shortBio}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    )
  }
}

export default Index
