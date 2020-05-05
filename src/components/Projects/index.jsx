import React, { useState, useContext } from "react"
import { useTrail } from "react-spring"
import { Waypoint } from "react-waypoint"
import Project from "../Project"
import "./projects.css"
import { GlobalContext } from "../../pages"

const Projects = () => {
  const [on, toggle] = useState(false)
  const { setValue, allRefs } = useContext(GlobalContext)
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
    <div ref={allRefs[1]} className="projectsBody">
      <Waypoint
        bottomOffset="20%"
        onEnter={() => {
          setValue(1)
        }}
      />
      <Waypoint
        bottomOffset="40%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
        onLeave={() => {
          if (on) toggle(false)
        }}
      />
      <div />
      <h1 className="groupHeaders">Portfolio</h1>
      <div class="app">
        <div class="full hide-scroll">
          <ul class="hs">
            {trail.map((fade, index) => (
              <li className="item">
                <Project fade={fade} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects
