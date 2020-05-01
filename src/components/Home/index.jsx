import React from "react"
import { useSpring, animated, config } from "react-spring"
import "./home.css"

const Home = (props) => {
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: config.molasses,
  })
  return (
    <div>
      <animated.div ref={props.refHome} style={fade} className="homeBody" />
      <animated.div style={fade} className="home-title">
        Matt Zuckermann
      </animated.div>
    </div>
  )
}

export default Home
