import React, { useState } from "react"
import { useSpring, animated } from "react-spring"

const index = () => {
  const [on, toggle] = useState(false)
  const menuSlider = useSpring({
    transform: on ? "translate3d(-20%,0,0)" : "translate3d(-100%,0,0)",
  })
  return <animated.div style={menuSlider} />
}

export default index
