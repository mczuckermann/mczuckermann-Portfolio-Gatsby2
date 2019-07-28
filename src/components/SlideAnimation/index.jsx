import React from "react"

const SlideAnimation = ({
  imageInfo,
  index,
  hoverChange,
  hoverAnimation,
  animated,
}) => {
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

export default SlideAnimation
