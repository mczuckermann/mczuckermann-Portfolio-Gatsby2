import { useRef, useState } from "react"
import { useSpring } from "react-spring"

export const minimize = () => {

  const minimizeRef = useRef(null)
  const minimize = useSpring({
    transform: "scale(1,1)",
    ref: maximizeRef,
  })
  return { minimizeRef, minimize, }
}
