import React, { useState, useRef, useContext } from "react"
import Img from "../Image"
import "./about.css"
import { Waypoint } from "react-waypoint"
import { useChain, useSpring, animated, config } from "react-spring"
import { Grid } from "@material-ui/core"
import { GlobalContext } from "../../pages"

const About = () => {
  const [on, toggle] = useState(false)
  const { allRefs } = useContext(GlobalContext)

  const imageFadeRef = useRef(null)
  const imageFade = useSpring({
    opacity: on ? 1 : 0.15,
    ref: imageFadeRef,
    config: { duration: 300 },
  })
  const slideRef = useRef(null)
  const textSlide = useSpring({
    transform: on ? "translate3d(0,0,0)" : "translate3d(50vw,0,0)",
    opacity: on ? 1 : 0,
    ref: slideRef,
    config: { tension: 160, friction: 30 },
  })
  const textFadeRef = useRef(null)
  const textFade = useSpring({
    opacity: on ? 1 : 0,
    ref: textFadeRef,
    config: config.molasses,
  })

  useChain(
    [
      { current: imageFadeRef.current },
      { current: slideRef.current },
      { current: textFadeRef.current },
    ],
    on ? [0, 0.2, 0.6] : [0, 0, 0]
  )

  return (
    <div ref={allRefs[2]} className="aboutBody">
      <h1 className="groupHeaders">About</h1>
      <div className="aboutMeSet">
        <Waypoint
          bottomOffset="0%"
          onEnter={() => {
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
          spacing={0}
        >
          <Grid item xl={12} lg={6} md={12} sm={6} xs={12}>
            <animated.div
              style={{
                ...imageFade,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Img className="headShotImage" alt="Head-Shot" />
            </animated.div>
          </Grid>
          <Grid
            item
            className="bioWrapper"
            xl={12}
            lg={6}
            md={12}
            sm={6}
            xs={12}
          >
            <animated.div className="bioBackground" style={textSlide}>
              <animated.p className="portfolioBio" style={textFade}>
                Full-stack developer specializing in React, TypeScript, Gatsby,
                Next.js, and AWS. UC Berkeley Extension coding boot camp grad.
                Experienced JAM / MERN / LAMP stack developer, AV technical
                director, and audio engineer.
              </animated.p>
            </animated.div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default About
