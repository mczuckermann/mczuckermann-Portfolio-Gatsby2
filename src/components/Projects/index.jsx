import React, { useState } from "react"
import { useTrail, useSpring, animated } from "react-spring"
import { Waypoint } from "react-waypoint"
import classNames from "classnames"
import navigator from "../../js/navigator"
import imageInfo from "../../json/imageInfo.json"
import DemoLineNYT from "../DemoLineNYT"
import DemoLineSnippets from "../DemoLineSnippets"
import SlideAnimation from "../SlideAnimation"
import Images from "../../images"
import "./projects.css"

const images = [
  Images.image1,
  Images.image2,
  Images.image3,
  Images.image4,
  Images.image5,
]

const Projects = props => {
  const [on, toggle] = useState(false)
  const [trail, set, stop] = useTrail(4, () => ({
    transform: "scale(0.8, 0.8), translate3d(-8%,0,0)",
    opacity: 0,
  }))
  set({
    opacity: on ? 1 : 0,
    transform: on
      ? "scale(1, 1), translate3d(0,0,0,)"
      : "scale(0.8,0.8), translate3d(-8%,0,0)",
    config: { duration: 1500 / 4 },
  })
  stop()

  return (
    <div
      ref={props.refProjects}
      className="container-full projectsBody rounded overflowRow"
    >
      <Waypoint
        bottomOffset="82%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
      />
      <div />
      <h1 className="groupHeaders col-12">Apps/Projects</h1>
      <div className="container-full projectsBody rounded" id="projectsBodyPad">
        <div className="row">
          {trail.map((props, index) => {
            const [mouseIn, hoverChange] = useState(false)
            const hoverAnimation = useSpring({
              opacity: mouseIn ? 0.9 : 0,
              transform: mouseIn ? "scale(1, 1)" : "scale(0.2,0.2)",
            })
            return (
              <animated.div
                style={props}
                className="col-xl-6 col-lg-6 col-md-6 hiddenImage"
                key={index}
              >
                <div className="projectOpaqueBackground rounded">
                  <div className="repoImageWrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={imageInfo[index].deployLink}
                    >
                      <img
                        onMouseEnter={() => hoverChange(true)}
                        onMouseLeave={() => hoverChange(false)}
                        className="repoImages rounded"
                        src={images[index]}
                        alt={imageInfo[index].appName}
                      />
                      {!navigator() ? (
                        <SlideAnimation
                          index={index}
                          imageInfo={imageInfo}
                          hoverChange={hoverChange}
                          hoverAnimation={hoverAnimation}
                          animated={animated}
                        />
                      ) : (
                        <div />
                      )}
                    </a>
                  </div>
                  <div className="repoUrlDiv">
                    <a
                      id="noDecoration"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={imageInfo[index].deployLink}
                    >
                      <span
                        className={classNames("repoUrlLinks", {
                          repoUrlLinksHover: !navigator(),
                        })}
                      >
                        {imageInfo[index].appName}
                      </span>
                    </a>
                    <span id="paddingDivider">|</span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={imageInfo[index].repoLink}
                    >
                      <span
                        className={classNames("repoUrlLinks", {
                          repoUrlLinksHover: !navigator(),
                        })}
                      >
                        <i className="fab fa-github" />
                      </span>
                    </a>
                    <div className="shortBio">{imageInfo[index].shortBio}</div>
                  </div>
                  <div>
                    <br />
                    {imageInfo[index].appName === "Best Seller Searcher" && (
                      <DemoLineNYT />
                    )}
                    {imageInfo[index].appName === "Snippets." && (
                      <DemoLineSnippets />
                    )}
                  </div>
                </div>
              </animated.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
