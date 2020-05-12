import React from "react"
import scrollmagic from "scrollmagic"
import { animated } from "react-spring"

// init controller
var controller = new scrollmagic.Controller()

// build scene
var scene = new scrollmagic.Scene({ triggerElement: "#trigger" })
  // trigger a velocity opaticy animation
  .setVelocity("#animate", { opacity: 0 }, { duration: 400 })
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)

export const ScrollMagic = ({ fade }) => {
  return (
    <div>
      <div class="spacer s2" />
      <div id="trigger" class="spacer s0" />
      <div id="animate" class="box1 blue">
        <animated.div style={fade} className="home-title">
          Matt Zuckermann
        </animated.div>
      </div>
      <div class="spacer s2" />
    </div>
  )
}
