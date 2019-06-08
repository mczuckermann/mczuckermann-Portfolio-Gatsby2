import React from "react"
import classNames from "classnames"
import navigator from "../../navigator"
import imageInfo from "../../json/imageInfo"
import Images from "../../images"
import "./projects.css"

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

const Projects = props => (
  <div
    ref={props.refprojects}
    className="container-full projectsBody rounded overflowRow"
  >
    <div />
    <h1 className="groupHeaders col-12">Apps/Projects</h1>
    <div className="container-full projectsBody rounded" id="projectsBodyPad">
      <div className="row">
        <div
          style={{ color: "#282b2e", fontSize: "16px", paddingLeft: "16px" }}
        >
          *For a demo version of{" "}
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
          and{" "}
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
          <div className="col-xl-6 col-lg-6 col-md-6 hiddenImage" key={index}>
            <div className="projectOpaqueBackground rounded">
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
                    className={classNames("repoUrlLinks", {
                      repoUrlLinksHover: !navigator(),
                    })}
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
                <div className="shortBio">{image.shortBio}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Projects
