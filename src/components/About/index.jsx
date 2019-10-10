import React, { useState, useRef } from "react"
import Img from "../Image"
import "./about.css"
import { Waypoint } from "react-waypoint"
import { useChain, useSpring, animated } from "react-spring"

const About = props => {
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
    <div ref={props.refAbout} className="container-full aboutBody">
      <h1 className="groupHeaders col-12">About Me</h1>
      <div className="row aboutMeSet">
        <animated.div className="col-lg-12 col-md-12" style={imageFade}>
          <Img className="headShotImage" alt="Head-Shot" />
        </animated.div>
        <div className="col-lg-3 col-md-3 col-sm-3" />
        <Waypoint
          bottomOffset="20%"
          onEnter={() => {
            if (!on) toggle(true)
          }}
        />
        <animated.div
          className="col-lg-6 col-md-12 col-sm-12 bioBackground"
          style={textSlide}
        >
          <br />
          <animated.p className="portfolioBio" style={textFade}>
            Full stack web developer specializing in React, Gatsby, and Node.
            Recent UC Berkeley Extension coding boot camp grad in full stack web
            development. Experienced AV technical director with a history in
            audio engineering and two Bachelor of Arts degrees in music and
            communication-media studies. Passion for tech platforms and the
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
