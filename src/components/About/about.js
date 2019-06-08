import React, { useState, useRef } from "react"
import Img from "../Image/image"
import "./about.css"
import { Waypoint } from "react-waypoint"
import { useChain, useSpring, animated } from "react-spring"

const About = props => {
  const [on, toggle] = useState(false)

  const slideRef = useRef()
  const animationSlide = useSpring({
    transform: on ? "translate3d(0,0,0,)" : "translate3d(-149%,0,0)",
    ref: slideRef,
  })

  const fadeRef = useRef()
  const animationFade = useSpring({
    opacity: on ? 1 : 0,
    ref: fadeRef,
  })

  useChain([slideRef, fadeRef])

  return (
    <div ref={props.refabout} className="container-full aboutBody">
      <h1 className="groupHeaders col-12">About Me</h1>
      <div className="row aboutMeSet">
        <div className="col-lg-12 col-md-12">
          <Img className="headShotImage" alt="Head-Shot" />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3" />
        <Waypoint
          bottomOffset="26%"
          onEnter={() => {
            if (!on) toggle(true)
          }}
        />
        <animated.div
          className="col-lg-6 col-md-12 col-sm-12 bioBackground"
          style={animationSlide}
        >
          <br />
          <animated.p className="portfolioBio" style={animationFade}>
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
        <span />
        <span />
      </div>
    </div>
  )
}

export default About
