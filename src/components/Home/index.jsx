import React, { useContext, useState } from "react"
import { useSpring, animated, config } from "react-spring"
import { Waypoint } from "react-waypoint"
import { GlobalContext } from "../../pages"
import "./home.css"

const Home = () => {
  const { allRefs, setRefIndex, minimize, slideTop, sizedBackUp } = useContext(
    GlobalContext
  )
  const [on, toggle] = useState(true)
  const fadeInOut = useSpring({
    opacity: on ? 1 : 0.3,
    transform: on ? "scale(1, 1)" : "scale(0.85,0.95)",
    config: config.molasses,
  })
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: config.molasses,
  })

  return (
    <animated.div style={sizedBackUp}>
      <animated.div style={slideTop}>
        <animated.div style={fade}>
          <animated.div ref={allRefs[0]} style={minimize} className="fullWidth">
            <Waypoint
              bottomOffset="0%"
              onEnter={() => {
                setRefIndex(0)
              }}
            />
            <animated.div className="homeBody" />
            <Waypoint
              bottomOffset="50%"
              onEnter={() => {
                if (on) toggle(false)
              }}
              onLeave={() => {
                if (!on) toggle(true)
              }}
            />
            <animated.div style={fade}>
              <animated.div style={fadeInOut} className="home-title">
                Matt Zuckermann
              </animated.div>
            </animated.div>
            <animated.div className="arrow">
              <span />
            </animated.div>
          </animated.div>
        </animated.div>
      </animated.div>
    </animated.div>
  )
}

export default Home
