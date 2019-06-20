import PropTypes from "prop-types"
import React, { useState } from "react"
import { useSpring, animated, config } from "react-spring"
import { Waypoint } from "react-waypoint"
import arrow from "../../images/white-arrow.png"
import "./footer.css"

const Footer = props => {
  const [on, toggle] = useState(false)
  const fadeIn = useSpring({
    opacity: on ? 1 : 0,
    config: config.mollasses,
  })

  return (
    <div ref={props.refcontact} className="container-full footerFormat">
      <Waypoint
        bottomOffset="32%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
      />
      <animated.div style={fadeIn}>
        <div className="contactMe">Contact Me</div>
        <div>Let's work together!</div>
        <br />
        <div>
          <span className="footerNoLink">+1-217-722-4952</span> ||{" "}
          <a className="noDecoration" href="mailto: mczuckermann@gmail.com">
            mczuckermann@gmail.com
          </a>{" "}
          ||{" "}
          <a
            className="noDecoration"
            href="https://twitter.com/mczuckermann"
            rel="noopener noreferrer"
            target="_blank"
          >
            @mczuckermann
          </a>
        </div>
        <div>
          <a
            className="noDecoration"
            href="https://www.linkedin.com/in/mczuckermann/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          ||{" "}
          <a
            className="noDecoration"
            href="https://mczuckermann.herokuapp.com/docs/Matt-Zuckermann_R%C3%A9sum%C3%A9.pdf#zoom=115"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>{" "}
          ||{" "}
          <a
            className="noDecoration"
            href="https://github.com/mczuckermann"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>{" "}
        </div>
        <div>
          <a
            className="noDecoration"
            href="https://mczuckermann.herokuapp.com/docs/Matt-Zuckermann_Business-Card.pdf#zoom=325"
            rel="noopener noreferrer"
            target="_blank"
          >
            Business Card
          </a>
        </div>
      </animated.div>
      <footer className="container-full">
        <div className="col-12 footerNoLink copyrightDiv">
          <animated.div style={fadeIn}>
            <img
              className="arrowButton"
              onClick={props.onClick}
              tabIndex="0"
              src={arrow}
              alt="arrow"
            />
            <div id="backToTopText" className="noDecoration">
              Back To Top
            </div>
          </animated.div>
          <br />
          <div> © 2019 mczuckermann. All Rights Reserved</div>
        </div>
      </footer>
    </div>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
