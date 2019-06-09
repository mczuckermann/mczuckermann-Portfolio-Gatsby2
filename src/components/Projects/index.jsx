import React, { useState } from "react"
import { useTrail, animated } from "react-spring"
import { Waypoint } from "react-waypoint"
import classNames from "classnames"
import navigator from "../../js/navigator"
import imageInfo from "../../json/imageInfo.json"
import Images from "../../images"
import { makeStyles } from "@material-ui/styles"

const images = [
  Images.image1,
  Images.image2,
  Images.image3,
  Images.image4,
  Images.image5,
]

const useStyles = makeStyles({
  projectOpaqueBackground: {
    padding: "30px 0px",
    margin: "30px 0px",
    height: "100%",
    background: `linear-gradient(to right, rgba(206, 222, 232, 0), rgb(17, 7, 29)), linear-gradient(to bottom, rgb(191, 194, 196, 0), rgb(75, 71, 80))`,
    opacity: 0.8,
  },
  repoImages: {
    width: "68%",
    height: "auto",
    display: "block",
    margin: "40px auto 0px auto",
    boxShadow: "8px 8px 3px 0px rgba(0, 0, 0, 0.75)",
    "@media screen and (max-width: 381px)": {
      width: "100%",
    },
  },
  repoUrlDiv: {
    textAlign: "center",
    padding: "10px 0 0 0",
    marginBottom: "5px",
  },
  noDecoration: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "none",
    },
  },
  projectsBody: {
    padding: "20px 0px 30px 0px",
    backgroundColor: "rgb(243, 243, 243)",
  },
  projectsBodyPad: {
    backgroundColor: "rgb(243, 243, 243)",
    padding: "0px 15px",
  },
  demoLine: {
    color: "#282b2e",
    fontSize: "16px",
    paddingLeft: "16px",
  },
  underline: {
    color: "black",
    fontWeight: "bold",
  },
  paddingDivider: {
    padding: "0px 4px",
    color: "white",
  },
  shortBio: {
    fontSize: "14px",
    color: "white",
    "-webkit-text-stroke": "0.1px black",
  },
  hiddenImage: {
    overflow: "hidden",
  },
  groupHeaders: {
    fontSize: "35px",
    backgroundColor: "black",
    color: "white",
    textAlign: "left",
    fontFamily: "Abel, sans-serif",
  },
  repoUrlLinks: {
    textDecoration: "none",
    "-webkit-text-stroke": "0.9px white",
    color: "black",
    borderRadius: "11%",
    padding: "0 3px",
    fontSize: "27px",
  },
  repoUrlLinksHover: {
    "&:hover": {
      color: "rgb(164, 194, 187)",
      textDecoration: "none",
    },
  },
})

const Projects = props => {
  const classes = useStyles()
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
      ref={props.refprojects}
      className={`${classes.projectsBody} container-full rounded`}
    >
      <Waypoint
        bottomOffset="82%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
      />
      <div />
      <h1 className={`${classes.groupHeaders} col-12`}>Apps/Projects</h1>
      <div className={`${classes.projectsBodyPad} container-full rounded`} />
      <div className="row">
        <div className={classes.demoLine}>
          *For a demo version of{" "}
          <i>
            <a
              className={classes.noDecoration}
              target="_blank"
              rel="noopener noreferrer"
              href="https://searcher-mczuckermann.herokuapp.com/"
            >
              Best Seller Searcher
            </a>
          </i>{" "}
          and{" "}
          <i>
            <a
              className={classes.noDecoration}
              target="_blank"
              rel="noopener noreferrer"
              href="https://snippets-mczuckermann.herokuapp.com/"
            >
              Snippets.
            </a>
          </i>
          , use the username "<u className={classes.underline}>demo@demo.com</u>
          " with the password "<u className={classes.underline}>demo</u>"
        </div>
      </div>
      <div className="row">
        {trail.map((props, index) => (
          <animated.div
            style={props}
            className={`${classes.hiddenImage} col-xl-6 col-lg-6 col-md-6`}
            key={index}
          >
            <div className={`${classes.projectOpaqueBackground} rounded`}>
              <a
                href={imageInfo[index].deployLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={`${classes.repoImages} rounded`}
                  src={images[index]}
                  alt={imageInfo[index].appName}
                />
              </a>
              <div className={classes.repoUrlDiv}>
                <a
                  className={classes.noDecoration}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={imageInfo[index].deployLink}
                >
                  <span
                    className={classNames(classes.repoUrlLinks, {
                      [classes.repoUrlLinksHover]: !navigator(),
                    })}
                  >
                    {imageInfo[index].appName}
                  </span>
                </a>
                <span className={classes.paddingDivider}>|</span>
                <a
                  className={classes.noDecoration}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={imageInfo[index].repoLink}
                >
                  <span
                    className={classNames(classes.repoUrlLinks, {
                      [classes.repoUrlLinksHover]: !navigator(),
                    })}
                  >
                    <i className="fab fa-github" />
                  </span>
                </a>
                <div className={classes.shortBio}>
                  {imageInfo[index].shortBio}
                </div>
              </div>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
