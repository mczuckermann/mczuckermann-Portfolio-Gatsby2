import React, { useState, useRef } from "react"
import "./arrow.css"
import background from "../../images/background.jpg"
import Img from "../Image"
import { makeStyles } from "@material-ui/styles"
import { useChain, useSpring, animated } from "react-spring"
import { Waypoint } from "react-waypoint"

const useStyles = makeStyles({
  aboutBody: {
    backgroundImage: `url(${background}) !important`,
    width: "100%",
    overflow: "hidden",
    padding: "20px 2px",
  },
  groupHeaders: {
    fontSize: "35px",
    backgroundColor: "black",
    color: "white",
    textAlign: "left",
    fontFamily: "Abel, sans-serif",
  },
  aboutMeSet: {
    marginBottom: "6px",
  },
  bioBackground: {
    backgroundColor: "black",
    borderRadius: "10px",
    opacity: 0.7,
    overflow: "hidden",
  },
  portfolioBio: {
    color: "white",
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "Hind, sans-serif",
    padding: "0 5px",
  },
  headShotImage: {
    width: "500px",
    display: "block",
    marginTop: "15px",
    marginBottom: "15px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "100%",
    "@media screen and (max-width: 503px)": {
      width: "85",
    },
  },
})

const About = props => {
  const classes = useStyles()

  const [on, toggle] = useState(false)

  const slideRef = useRef()
  const textSlide = useSpring({
    transform: on ? "translate3d(0,0,0,)" : "translate3d(-149%,0,0)",
    ref: slideRef,
  })

  const textFadeRef = useRef()
  const imageFade = useSpring({
    opacity: on ? 1 : 0.7,
    ref: textFadeRef,
  })

  const imageFadeRef = useRef()
  const textFade = useSpring({
    opacity: on ? 1 : 0,
    ref: imageFadeRef,
  })

  useChain([imageFadeRef, slideRef, textFadeRef])

  return (
    <div ref={props.refabout} className={`${classes.aboutBody} container-full`}>
      <h1 className={`${classes.groupHeaders} col-12`}>About Me</h1>
      <div className={`${classes.aboutMeSet} row`}>
        <animated.div className="col-lg-12 col-md-12" style={imageFade}>
          <Img className={classes.headShotImage} alt="Head-Shot" />
        </animated.div>
        <div className="col-lg-3 col-md-3 col-sm-3" />
        <Waypoint
          bottomOffset="20%"
          onEnter={() => {
            if (!on) toggle(true)
          }}
        />
        <animated.div
          className={`${classes.bioBackground} col-lg-6 col-md-12 col-sm-12`}
          style={textSlide}
        >
          <br />
          <animated.p className={classes.portfolioBio} style={textFade}>
            Full Stack Web Developer specializing in React, Gatsby, and Node.
            Experienced Technical Director with a history in audiovisual
            engineering and two Bachelor of Arts degrees in Music and
            Communication-Media Studies. Passion for tech platforms and the
            communities they create.
          </animated.p>
        </animated.div>
        <div className="col-lg-3 col-md-3 col-sm-3" />
      </div>
      <br />
      <br />
      <br />
      <div className="arrow">
        <span />
      </div>
    </div>
  )
}

export default About
