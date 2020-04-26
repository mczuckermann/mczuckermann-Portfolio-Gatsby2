import FooterLink from "../FooterLink"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { useSpring, animated, config } from "react-spring"
import { Waypoint } from "react-waypoint"
import darkArrow from "../../images/darkArrowButton.png"
import lightArrow from "../../images/lightArrowButton.png"
import "./footer.css"

const Footer = (props) => {
  const [on, toggle] = useState(false)
  const fadeIn = useSpring({
    opacity: on ? 1 : 0,
    config: config.molasses,
  })
  const arrowImages = [darkArrow, lightArrow]

  return (
    <div ref={props.refContact} className="container-full footerBody">
      <Waypoint
        bottomOffset="32%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
      />
      <animated.div style={fadeIn}>
        <footer>
          <div className="contactMe">Contact Me</div>
          <div style={{ fontSize: "2.0em", color: "#D3D3D3" }}>Let's work together!</div>
          <br />
          <div style={{ fontSize: "1.3em" }}>
            <FooterLink link={"tel:1-217-722-4952"}>+1-217-722-4952</FooterLink>
            <span> || </span>
            <FooterLink link={"mailto: mczuckermann@gmail.com"}>
              mczuckermann@gmail.com
            </FooterLink>
            <span> || </span>
            <FooterLink link={"https://twitter.com/mczuckermann"}>
              @mczuckermann
            </FooterLink>
          </div>

          <div style={{ fontSize: "1.3em" }}>
            <FooterLink link={"https://www.linkedin.com/in/mczuckermann/"}>
              LinkedIn
            </FooterLink>
            <span> || </span>
            <FooterLink
              link={
                "https://mczuckermann.herokuapp.com/docs/Matt_Zuckermann_Resume.pdf#zoom=115"
              }
            >
              Resume
            </FooterLink>
            <span> || </span>
            <FooterLink link={"https://github.com/mczuckermann"}>
              Github
            </FooterLink>
          </div>
          <div style={{ fontSize: "1.3em" }}>
            <FooterLink
              link={
                "https://mczuckermann.herokuapp.com/docs/Matt-Zuckermann_Business-Card.pdf#zoom=325"
              }
            >
              Business Card
            </FooterLink>
          </div>
          <div className="container-full">
            <div className="col-12 footerNoLink copyrightDiv">
              <div>
                <button
                  className="arrowButton"
                  onClick={props.onClick}
                  style={{ backgroundColor: "inherit", border: "none" }}
                >
                  <img
                    className="buttonImage"
                    style={{ width: "4.0em" }}
                    src={arrowImages[0]}
                    alt="arrow-button"
                  />
                </button>
                <div
                  id="backToTopText"
                  className="noDecoration"
                  style={{ fontSize: "1.1em" }}
                >
                  Back To Top
                </div>
              </div>
              <br />
              <div style={{ fontSize: "0.9em" }}>
                Copyright ©{new Date().getFullYear()} Matt Zuckermann. All
                Rights Reserved
              </div>
            </div>
          </div>
        </footer>
      </animated.div>
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
