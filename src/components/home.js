import React from "react"
import { useSpring, animated } from "react-spring"

const Home = props => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })
  return (
    <div>
      <animated.div
        ref={props.refhome}
        style={fade}
        className="container-full homeBody"
      />
      <div className="home-title">Matt Zuckermann</div>
    </div>
  )
}

export default Home
