import React from "react"
import navigator from "../../js/navigator"

const SlideAnimation = (imageInfo, index, hoverAnimation, animated) => {
  if (!navigator()) {
    return (
      <div>
        <animated.div
          onMouseEnter={() => hoverChange(true)}
          onMouseLeave={() => hoverChange(false)}
          className={`class-${index} slideInDesc rounded`}
          style={hoverAnimation}
        >
          {imageInfo[index].desc}
        </animated.div>
      </div>
    )
  }
}

export default SlideAnimation
