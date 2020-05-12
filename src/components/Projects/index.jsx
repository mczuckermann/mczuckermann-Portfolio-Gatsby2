import React, { useState, useContext } from "react"
import { useTrail, animated } from "react-spring"
import { Waypoint } from "react-waypoint"
import Project from "../Project"
import "./projects.css"
import { GlobalContext } from "../../pages"

const Projects = () => {
  const [on, toggle] = useState(false)
  const { allRefs, slide } = useContext(GlobalContext)
  const [trail, set, stop] = useTrail(4, () => ({
    transform: "scale(0.8, 0.8), translate3d(-8%,0,0)",
    opacity: 0,
  }))
  set({
    opacity: on ? 1 : 0,
    transform: on
      ? "scale(1, 1), translate3d(0,0,0,)"
      : "scale(0.8,0.8), translate3d(-8%,0,0)",
    config: { duration: 4000 / 4 },
  })
  stop()

  return (
    <animated.div style={slide} ref={allRefs[1]} className="projectsBody">
      <Waypoint
        topOffset="50%"
        bottomOffset="50%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
        onLeave={() => {
          if (on) toggle(false)
        }}
      />
      <h1 className="groupHeaders">Portfolio</h1>
      <div className="app">
        <div className="full hide-scroll">
          <ul className="hs">
            {trail.map((fade, index) => (
              <li className="item" key={`key-${index}`}>
                <Project fade={fade} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </animated.div>
  )
}

export default Projects
