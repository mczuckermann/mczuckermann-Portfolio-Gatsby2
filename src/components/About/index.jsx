import React, { useState, useRef, useContext } from "react"
import Img from "../Image"
import "./about.css"
import { Waypoint } from "react-waypoint"
import { useChain, useSpring, animated, config } from "react-spring"
import { Grid } from "@material-ui/core"
import { GlobalContext } from "../../pages"

const About = () => {
  const [on, toggle] = useState(false)
  const { setValue, allRefs } = useContext(GlobalContext)
  const slideRef = useRef()
  const textSlide = useSpring({
    transform: on ? "translate3d(0,0,0,)" : "translate3d(149%,0,0)",
    ref: slideRef,
    config: config.gentle,
  })

  const textFadeRef = useRef()
  const imageFade = useSpring({
    opacity: on ? 1 : 0.15,
    ref: textFadeRef,
    config: config.molasses,
  })
  const imageFadeRef = useRef()
  const textFade = useSpring({
    opacity: on ? 1 : 0,
    ref: imageFadeRef,
  })

  useChain([imageFadeRef, slideRef, textFadeRef])

  return (
    <div ref={allRefs[2]} className="aboutBody">
      <h1 className="groupHeaders">About</h1>
      <div className="aboutMeSet">
        <Waypoint
          bottomOffset="0%"
          onEnter={() => {
            setValue(2)
            if (!on) toggle(true)
          }}
          onLeave={() => {
            if (on) toggle(false)
          }}
        />
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={1}
        >
          <Grid
            container
            style={{ justifyContent: "center" }}
            item
            xl={12}
            lg={6}
            md={12}
            xs={12}
            spacing={10}
          >
            <animated.div style={imageFade}>
              <Img className="headShotImage" alt="Head-Shot" />
            </animated.div>
          </Grid>
          <Grid
            container
            style={{ justifyContent: "center", alignItems: "center" }}
            item
            xl={12}
            lg={6}
            md={12}
            xs={12}
            spacing={3}
          >
            <animated.div className="bioBackground" style={textSlide}>
              <animated.p className="portfolioBio" style={textFade}>
                Full-stack developer specializing in TypeScript, React,
                JamStack, and SQL / NoSQL databases. UC Berkeley Extension
                coding program grad. Experienced JAM / MERN / LAMP stack
                developer, AV technical director, and audio engineer.
              </animated.p>
            </animated.div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default About
