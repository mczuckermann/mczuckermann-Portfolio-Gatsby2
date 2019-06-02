import React from "react"
import Img from "../components/image"

const About = props => (
  <div ref={props.refabout} className="container-full aboutBody rounded">
    <h1 className="groupHeaders col-12">About Me</h1>
    <div className="row aboutMeSet">
      <div className="col-lg-12 col-md-12">
        <Img className="headShotImage" alt="Head-Shot" />
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3" />
      <div className="col-lg-6 col-md-12 col-sm-12 bioBackground">
        <br />
        <p className="portfolioBio">
          Full Stack Web Developer specializing in React, Gatsby, and Node.
          Experienced Technical Director with a history in audiovisual
          engineering and two Bachelor of Arts degrees in Music and
          Communication-Media Studies. Passion for tech platforms and the
          communities they create.
        </p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3" />
    </div>
    <br />
    <br />
    <br />
    <div className="arrow">
      <span />
      <span />
      <span />
    </div>
  </div>
)

export default About
