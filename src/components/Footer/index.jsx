import FooterLink from "../FooterLink"
import PropTypes from "prop-types"
import React, { useState } from "react"
// import GitHubIcon from "@material-ui/icons/Github"
// import TwitterIcon from "@material-ui/icons/Twitter"
// import LinkedInIcon from "@material-ui/icons/LinkedIn"
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
    <div ref={props.refContact} className="footerBody">
      <Waypoint
        bottomOffset="60%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
      />
      <animated.div style={fadeIn}>
        <footer>
          <div className="contactMe">Contact Me</div>
          <div
            className="contactMe"
            style={{ fontSize: "2.0em", color: "#D3D3D3" }}
          >
            Let's work together!
          </div>
          <br />
          <div style={{ fontSize: "1.3em" }}>
            <FooterLink link={"tel:1-217-722-4952"}>+1-217-722-4952</FooterLink>
            <span> || </span>
            <FooterLink link={"mailto: mczuckermann@gmail.com"}>
              mczuckermann@gmail.com
            </FooterLink>
            <span> || </span>
            <FooterLink
              link={
                "https://mczuckermann.herokuapp.com/docs/Matt_Zuckermann_Resume.pdf#zoom=115"
              }
            >
              Resume
            </FooterLink>
          </div>

          <div style={{ fontSize: "1.3em" }}>
            <FooterLink link={"https://www.linkedin.com/in/mczuckermann/"}>
              LinkedIn
              {/* <LinkedInIcon /> */}
            </FooterLink>
            <span> || </span>
            <FooterLink link={"https://twitter.com/mczuckermann"}>
              Twitter
              {/* <TwitterIcon /> */}
            </FooterLink>
            <span> || </span>
            <FooterLink link={"https://github.com/mczuckermann"}>
              GitHub
              {/* <GitHubIcon /> */}
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

          <div>
            <div className="footerNoLink copyrightDiv">
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
              <div className="contactMe" style={{ fontSize: "0.9em" }}>
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
