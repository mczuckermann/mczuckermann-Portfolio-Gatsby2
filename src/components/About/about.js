import React, { useState, useRef } from "react"
import Img from "../Image/image"
import "./about.css"
import background from "../../images/background.jpg"
import { Waypoint } from "react-waypoint"
import { useChain, useSpring, animated } from "react-spring"
import styled from "styled-components"

const About = props => {
  const AboutBody = styled.div`
    background-image: url(${background}) !important;
    width: 100%;
    overflow: hidden;
    padding: 20px 2px;
  `
  const GroupHeaders = styled.h1`
    font-size: 35px;
    background-color: black;
    color: white;
    text-align: left;
    font-family: "Abel", sans-serif;
  `
  const AboutMeSet = styled.div`
    margin-bottom: 6px;
  `
  const BioBackground = styled(animated.div)`
    background-color: black;
    border-radius: 10px;
    opacity: 0.7;
    overflow: hidden;
  `
  const PortfolioBio = styled(animated.p)`
    color: white;
    font-size: 20px;
    text-align: center;
    font-family: "Hind", sans-serif;
    padding: 0 5px;
  `

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
    <AboutBody ref={props.refabout} className="container-full">
      <GroupHeaders className="col-12">About Me</GroupHeaders>
      <AboutMeSet className="row">
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
        <BioBackground
          className="col-lg-6 col-md-12 col-sm-12"
          style={textSlide}
        >
          <br />
          <PortfolioBio style={textFade}>
            Full Stack Web Developer specializing in React, Gatsby, and Node.
            Experienced Technical Director with a history in audiovisual
            engineering and two Bachelor of Arts degrees in Music and
            Communication-Media Studies. Passion for tech platforms and the
            communities they create.
          </PortfolioBio>
        </BioBackground>
        <div className="col-lg-3 col-md-3 col-sm-3" />
      </AboutMeSet>
      <br />
      <br />
      <br />
      <div className="arrow">
        <span />
      </div>
    </AboutBody>
  )
}

export default About
