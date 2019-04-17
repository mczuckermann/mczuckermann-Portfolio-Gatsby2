import React from "react"
// import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer"
import imageInfo from "../json/imageInfo"
import iconInfo from "../json/iconInfo"
import Images from "../images"
import "./index.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.js"
import "react-bootstrap"

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
        <div className="container-full" id="headerBackground">
          <div className="container-full footerEdging" />
          <nav className="container navbar navbar-expand-sm navbar-light">
            <div className="navbar-brand" id="header">
              <span id="nameNav" className="responsiveText rounded">
                Matt Zuckermann
              </span>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto" id="header">
                <li className="nav-item" id="aboutNav">
                  <span
                    className="navSubObjects rounded"
                    onClick={this.scrollToAboutSection}
                  >
                    About Me
                  </span>
                </li>
                <li className="nav-item" id="projectsNav">
                  <span
                    className="navSubObjects rounded"
                    onClick={this.scrollToProjectSection}
                  >
                    Apps/Projects
                  </span>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-full footerEdging" />
        </div>
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
            <div className="col-lg-12 col-md-5">
              <img
                className="col-12"
                id="headShotImage"
                src={images[6]}
                alt="Head-Shot"
              />
            </div>
            <div className="col-lg-12 col-md-7">
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
              <div key={index} className="col-3 documentsBody">
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
                <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
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
                    <span id="paddingDivider">|</span>
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
