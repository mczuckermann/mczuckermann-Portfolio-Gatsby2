import React, { useState } from "react"
import { useTrail } from "react-spring"
import { Waypoint } from "react-waypoint"
import Project from "../Project"
import "./projects.css"

const Projects = (props) => {
  const [on, toggle] = useState(false)
  const [trail, set, stop] = useTrail(4, () => ({
    transform: "scale(0.8, 0.8), translate3d(-8%,0,0)",
    opacity: 0,
  }))
  set({
    opacity: on ? 1 : 0,
    transform: on
      ? "scale(1, 1), translate3d(0,0,0,)"
      : "scale(0.8,0.8), translate3d(-8%,0,0)",
    config: { duration: 5000 / 4 },
  })
  stop()

  return (
    <div ref={props.refProjects} className="projectsBody">
      <Waypoint
        bottomOffset="82%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
      />
      <div />

      <h1 className="groupHeaders">Portfolio</h1>
      <div class="app">
        <div class="full hide-scroll">
          <ul class="hs">
            {trail.map((props, index) => (
              <li className="item">
                <Project props={props} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects
