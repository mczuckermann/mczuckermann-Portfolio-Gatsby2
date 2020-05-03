import React, { useState, useRef } from "react"
import Img from "../Image"
import "./about.css"
import { Waypoint } from "react-waypoint"
import { useChain, useSpring, animated, config } from "react-spring"

const About = (props) => {
  const [on, toggle] = useState(false)

  const slideRef = useRef()
  const textSlide = useSpring({
    transform: on ? "translate3d(0,0,0,)" : "translate3d(-149%,0,0)",
    ref: slideRef,
    config: config.gentle
  })

  const textFadeRef = useRef()
  const imageFade = useSpring({
    opacity: on ? 1 : 0.15,
    ref: textFadeRef,
    config: config.molasses
  })
  const imageFadeRef = useRef()
  const textFade = useSpring({
    opacity: on ? 1 : 0,
    ref: imageFadeRef,
  })

  useChain([imageFadeRef, slideRef, textFadeRef])

  return (
    <div ref={props.refAbout} className="aboutBody">
      <h1 className="groupHeaders">About</h1>
      <div className="aboutMeSet">
        <animated.div style={imageFade}>
          <Img className="headShotImage" alt="Head-Shot" />
        </animated.div>
        <div />
        <Waypoint
          bottomOffset="20%"
          onEnter={() => {
            if (!on) toggle(true)
          }}
        />
        <animated.div className="bioBackground" style={textSlide}>
          <br />
          <animated.p className="portfolioBio" style={textFade}>
            Software Engineer specializing in JavaScript, Python, Java, and
            SQL/NoSQL databases. UC Berkeley Extension coding program grad in
            MERN stack. Experienced Linux network support engineer, AV technical
            director, and a history in audio engineering with two Bachelor of
            Arts degrees in music and communication-media studies.
          </animated.p>
        </animated.div>
        <div />
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default About
