import React, { useState } from "react"
import { useTrail, animated } from "react-spring"
import { Waypoint } from "react-waypoint"
import classNames from "classnames"
import navigator from "../../js/navigator"
import imageInfo from "../../json/imageInfo.json"
import Images from "../../images"
import styled from "styled-components"
import "./projects.css"

const images = [
  Images.image1,
  Images.image2,
  Images.image3,
  Images.image4,
  Images.image5,
]

const Projects = props => {
  const ProjectOpaqueBackground = styled.div`
    padding: 30px 0px;
    margin: 30px 0px;
    height: 100%;
    background: linear-gradient(
        to right,
        rgba(206, 222, 232, 0),
        rgb(17, 7, 29)
      ),
      linear-gradient(to bottom, rgb(191, 194, 196, 0), rgb(75, 71, 80));
    opacity: 0.8;
  `
  const RepoImages = styled.img`
    width: 68%;
    height: auto;
    display: block;
    margin: 40px auto 0px auto;
    box-shadow: 8px 8px 3px 0px rgba(0, 0, 0, 0.75);
  `
  const RepoUrlDiv = styled.div`
    text-align: center;
    padding: 10px 0 0 0;
    margin-bottom: 5px;
  `
  const NoDecoration = styled.a`
    text-decoration: none;
    color: black;
    font-weight: bold;
    &:hover {
      text-decoration: none;
    }
  `
  const ProjectsBody = styled.div`
    padding: 20px 0px 30px 0px;
    background-color: rgb(243, 243, 243);
  `
  const ProjectsBodyPad = styled.div`
    padding: 20px 0px 30px 0px;
    background-color: rgb(243, 243, 243);
    padding: 0px 15px;
  `
  const DemoLine = styled.div`
    color: "#282b2e";
    font-size: "16px";
    padding-left: "16px";
  `

  const Underline = styled.u`
    color: black;
    font-weight: bold;
  `
  const PaddingDivider = styled.span`
    padding: 0px 4px;
    color: white;
  `
  const ShortBio = styled.div`
    font-size: 14px;
    color: white;
    -webkit-text-stroke: 0.1px black;
  `
  const HiddenImage = styled(animated.div)`
    overflow: hidden;
  `

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
    <ProjectsBody ref={props.refprojects} className="container-full rounded">
      <Waypoint
        bottomOffset="82%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
      />
      <div />
      <h1 className="groupHeaders col-12">Apps/Projects</h1>
      <ProjectsBodyPad className="container-full rounded" id="projectsBodyPad">
        <div className="row">
          <DemoLine>
            *For a demo version of{" "}
            <i>
              <NoDecoration
                target="_blank"
                rel="noopener noreferrer"
                href="https://searcher-mczuckermann.herokuapp.com/"
              >
                Best Seller Searcher
              </NoDecoration>
            </i>{" "}
            and{" "}
            <i>
              <NoDecoration
                target="_blank"
                rel="noopener noreferrer"
                href="https://snippets-mczuckermann.herokuapp.com/"
              >
                Snippets.
              </NoDecoration>
            </i>
            , use the username "<Underline>demo@demo.com</Underline>" with the
            password "<Underline>demo</Underline>"
          </DemoLine>
        </div>
        <div className="row">
          {trail.map((props, index) => (
            <HiddenImage
              style={props}
              className="col-xl-6 col-lg-6 col-md-6"
              key={index}
            >
              <ProjectOpaqueBackground className="rounded">
                <a
                  href={imageInfo[index].deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RepoImages
                    className="rounded"
                    src={images[index]}
                    alt={imageInfo[index].appName}
                  />
                </a>
                <RepoUrlDiv>
                  <NoDecoration
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
                  </NoDecoration>
                  <PaddingDivider>|</PaddingDivider>
                  <NoDecoration
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
                  </NoDecoration>
                  <ShortBio>{imageInfo[index].shortBio}</ShortBio>
                </RepoUrlDiv>
              </ProjectOpaqueBackground>
            </HiddenImage>
          ))}
        </div>
      </ProjectsBodyPad>
    </ProjectsBody>
  )
}

export default Projects
