import React, { useState, useContext } from "react"
import { useSpring, animated, config } from "react-spring"
import { Waypoint } from "react-waypoint"
import { GlobalContext } from "../../pages"
import FooterLink from "../FooterLink"
import GitHubIcon from "@material-ui/icons/Github"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import darkArrow from "../../images/darkArrowButton.png"
import lightArrow from "../../images/lightArrowButton.png"
import "./footer.css"

const Footer = () => {
  const [on, toggle] = useState(false)
  const { setValue, allRefs, scrollToSection } = useContext(GlobalContext)
  const fadeIn = useSpring({
    opacity: on ? 1 : 0,
    config: config.molasses,
  })
  const arrowImages = [darkArrow, lightArrow]

  return (
    <div ref={allRefs[3]} className="footerBody">
      <Waypoint
        bottomOffset="40%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
        // onLeave={() => {
        //   if (on) toggle(false)
        // }}
      />
      <Waypoint
        bottomOffset="0%"
        onEnter={() => {
          setValue(3)
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
            <FooterLink link={"mailto:mczuckermann@gmail.com"}>
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
              {/* <LinkedInIcon /> */}
              LinkedIn
            </FooterLink>
            <span> || </span>
            <FooterLink link={"https://twitter.com/mczuckermann"}>
              {/* <TwitterIcon /> */}
              Twitter
            </FooterLink>
            <span> || </span>
            <FooterLink link={"https://github.com/mczuckermann"}>
              {/* <GitHubIcon /> */}
              GitHub
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
                  style={{ backgroundColor: "inherit", border: "none" }}
                >
                  <img
                    className="buttonImage"
                    style={{ width: "4.0em" }}
                    onClick={() => scrollToSection(allRefs[0])}
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

export default Footer
