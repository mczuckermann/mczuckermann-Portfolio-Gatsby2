import React from "react"
import { useSpring, animated } from "react-spring"
import "./home.css"

const Home = props => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })
  return (
    <div>
      <animated.div
        ref={props.refHome}
        style={fade}
        className="homeBody"
      />
      <div className="home-title">Matt Zuckermann</div>
    </div>
  )
}

export default Home
