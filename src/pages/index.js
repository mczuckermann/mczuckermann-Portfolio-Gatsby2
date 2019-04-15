import React from "react"
import { Link } from "gatsby"
import "react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import Footer from "../components/footer"
// import Image from "../components/image"
import "./index.css"
import SEO from "../components/seo"
import imageInfo from "../json/imageInfo"
import iconInfo from "../json/iconInfo"
import Images from "../images"

const images = [
  Images.image1,
  Images.image2,
  Images.image3,
  Images.image4,
  Images.image5,
  Images.image6,
  Images.image7,
]

console.log(Images)
console.log(images)
console.log(iconInfo)
console.log(imageInfo)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`music`, `artist`, `josh zuckermann`]} />
    <br />
    <br />
    <br />
    <br />
    <div className="row aboutBody rounded overflowRow">
      <h1 className="groupHeaders col-12">About Me</h1>
      <div className="row aboutBody rounded" />
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
          Full Stack Web Developer specializing in React, Gatsby, and Node.
          Experienced Technical Director with a history in audiovisual
          engineering and two Bachelor of Arts degrees in Music and
          Communication-Media Studies. Passion for tech platforms and the
          communities they create.
        </p>
      </div>
      {iconInfo.map(icon => (
        <div>
          <div className="col-3">
            <div className="documentsBody">
              <a target="_blank" rel="noopener noreferrer" href={icon.docLink}>
                <i className={icon.iconTag} title={icon.linkName} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    <br />
    <br />
    <div className="row projectsBody rounded overflowRow">
      <h1
        className="groupHeaders col-12"
        style={{ backgroundColor: "gray", color: "black" }}
      >
        Apps/Projects
      </h1>
      <div className="row projectsBody rounded" />
      {imageInfo.map((image, index) => (
        <div>
          <div className="col-xl-4 col-lg-6 col-md-6">
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
              |
              <a
                className="repoUrlLinks"
                target="_blank"
                rel="noopener noreferrer"
                href="{image.repoLink}"
              >
                <i className="fab fa-github" />
              </a>
              <div className="projectRole">{image.projectRole}</div>
              <div className="shortBio">{image.shortBio}</div>
            </div>
          </div>
          <br />
          <br />
        </div>
      ))}
    </div>
    <br />
    <br />
    <br />
    <Footer />
  </Layout>
)

export default IndexPage
