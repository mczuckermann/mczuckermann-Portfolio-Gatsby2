import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import navigator from "../../js/navigator"
import imageInfo from "../../js/imageInfo"
import DemoLineNYT from "../DemoLineNYT"
import DemoLineSnippets from "../DemoLineSnippets"
import SlideAnimation from "../SlideAnimation"
import githubIcon from "../../images/icons/github.png"

const Project = ({ fade, index }) => {
  const [mouseIn, hoverChange] = useState(false)
  const hoverAnimation = useSpring({
    opacity: mouseIn ? 0.9 : 0,
    transform: mouseIn ? "scale(1, 1)" : "scale(0.2,0.2)",
  })
  return (
    <React.Fragment key={index}>
      <animated.div style={fade} className="projectOpaqueBackground">
        <div>
          <div className="repoImageWrapper">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={imageInfo[index].deployLink}
            >
              <div
                role="button"
                onMouseEnter={() => hoverChange(true)}
                onMouseLeave={() => hoverChange(false)}
              >
                <img
                  className="repoImages"
                  src={imageInfo[index].image}
                  alt={imageInfo[index].appName}
                />
              </div>
              {!navigator() ? (
                <SlideAnimation
                  index={index}
                  imageInfo={imageInfo}
                  hoverChange={hoverChange}
                  hoverAnimation={hoverAnimation}
                  animated={animated}
                />
              ) : (
                <div className="slideInDesc">{imageInfo[index].desc}</div>
              )}
            </a>
          </div>
          <div className="repoUrlDiv">
            <div className="repoLinks">
              <span>
                <a
                  className="noDecorationButton"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={imageInfo[index].deployLink}
                >
                  <span className="repoUrlLinks">
                    {imageInfo[index].appName}
                  </span>
                </a>
              </span>
              <span id="paddingDivider">|</span>
              <span>
                <a
                  target="_blank"
                  className="noDecorationButton"
                  rel="noopener noreferrer"
                  href={imageInfo[index].repoLink}
                >
                  <span className="repoUrlLinks">
                    <img
                      className="projectIcon"
                      src={githubIcon}
                      alt="github"
                    />
                  </span>
                </a>
              </span>
            </div>
            <div className="shortBio">{imageInfo[index].shortBio}</div>
          </div>
          {imageInfo[index].extraHeight === 1 && (
            <div>
              <br />
            </div>
          )}
          {imageInfo[index].extraHeight === 2 && (
            <div>
              <br />
              <br />
            </div>
          )}
          <div className="demoDiv">
            {imageInfo[index].appName === "NYT Searcher" && <DemoLineNYT />}
            {imageInfo[index].appName === "Snippets." && <DemoLineSnippets />}
          </div>
        </div>
      </animated.div>
    </React.Fragment>
  )
}

export default Project
