import React, { useContext } from "react"
import { useSpring, animated, config } from "react-spring"
import { Waypoint } from "react-waypoint"
import { GlobalContext } from "../../pages"
import "./home.css"

const Home = () => {
  const { setValue, allRefs } = useContext(GlobalContext)
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: config.molasses,
  })
  return (
    <div>
      <Waypoint bottomOffset="0%" onEnter={() => setValue(0)} />
      <animated.div ref={allRefs[0]} style={fade} className="homeBody" />
      <animated.div style={fade} className="home-title">
        Matt Zuckermann
      </animated.div>
      <animated.div style={fade} className="arrow">
        <span />
      </animated.div>
    </div>
  )
}

export default Home
