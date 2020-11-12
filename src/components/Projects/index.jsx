import React, { useState, useEffect, useRef, useContext } from "react"
import { useTrail } from "react-spring"
import { Waypoint } from "react-waypoint"
import Project from "../Project"
import NetflixScrollButton from "../NetflixScrollButton"
import "./projects.css"
import { GlobalContext } from "../../pages"
import imageInfo from "../../js/imageInfo"

const Projects = () => {
  const arrowRef = useRef(null)
  const [on, toggle] = useState(false)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [windowWidth, setWindowWidth] = useState(null)
  const { setValue, allRefs } = useContext(GlobalContext)
  const [trail, set, stop] = useTrail(imageInfo.length, () => ({
    transform: "scale(0.8, 0.8), translate3d(-8%,0,0)",
    opacity: 0,
  }))
  set({
    opacity: on ? 1 : 0,
    transform: on
      ? "scale(1, 1), translate3d(0,0,0,)"
      : "scale(0.8,0.8), translate3d(-8%,0,0)",
    config: { duration: (imageInfo.length * 1000) / imageInfo.length },
  })
  stop()

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    })
    return () =>
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth)
      })
  }, [])

  useEffect(() => {
    arrowRef.current.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    })
  }, [scrollLeft])

  return (
    <div ref={allRefs[1]} className="projectsBody">
      <Waypoint
        bottomOffset="50%"
        onEnter={() => {
          setValue(1)
          if (!on) toggle(true)
        }}
        onLeave={() => {
          if (on) toggle(false)
        }}
      />
      <h1 className="groupHeaders">Portfolio</h1>
      <div className="app">
        <div className="full hide-scroll">
          {scrollLeft > 0 && (
            <NetflixScrollButton
              arrowRef={arrowRef}
              orientation="left"
              scrollLeft={scrollLeft}
              setScrollLeft={setScrollLeft}
              windowWidth={windowWidth}
            />
          )}
          {scrollLeft <= arrowRef.current?.scrollWidth - windowWidth && (
            <NetflixScrollButton
              arrowRef={arrowRef}
              orientation="right"
              scrollLeft={scrollLeft}
              setScrollLeft={setScrollLeft}
              windowWidth={windowWidth}
            />
          )}
          <ul ref={arrowRef} className="hs" style={{ position: "relative" }}>
            {trail.map((fade, index) => (
              <li className="item" key={`key-${index}`}>
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
