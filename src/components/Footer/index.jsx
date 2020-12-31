import React, { useState, useContext } from "react"
import { useSpring, animated, config } from "react-spring"
import { Waypoint } from "react-waypoint"
import { GlobalContext } from "../../pages"
import FooterLink from "../FooterLink"
import twitterIcon from "../../images/icons/twitter.webp"
import linkedinIcon from "../../images/icons/linkedin.webp"
import githubIcon from "../../images/icons/github.webp"
import darkArrow from "../../images/icons/darkArrowButton.webp"
import lightArrow from "../../images/icons/lightArrowButton.webp"
import "./footer.css"

const Footer = () => {
  const [on, toggle] = useState(false)
  const { setRefIndex, allRefs } = useContext(GlobalContext)
  const fadeIn = useSpring({
    opacity: on ? 1 : 0,
    config: on ? config.molasses : { duration: 300 },
  })
  const arrowImages = [darkArrow, lightArrow]

  return (
    <footer ref={allRefs[3]} className="footerBody">
      <Waypoint
        bottomOffset="80%"
        onEnter={() => {
          // setValue(3)
          if (!on) toggle(true)
        }}
        onLeave={() => {
          if (on) toggle(false)
        }}
      />
      <animated.div className="flexBody" style={fadeIn}>
        <div className="resizeFooter">
          <div className="contactMe" style={{ fontSize: "8.0em" }}>
            Contact Me
          </div>
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
            <FooterLink link={"mailto:matt@mattzuckermann.dev"}>
              matt@mattzuckermann.dev
            </FooterLink>
            <span> || </span>
            <FooterLink link={"/resume"}>Resume</FooterLink>
          </div>

          <div className="footerLinesB">
            <FooterLink link={"https://www.linkedin.com/in/mattzuckermann/"}>
              <img className="iconFooter" src={linkedinIcon} alt="linkedin" />
            </FooterLink>
            <span> </span>
            <FooterLink link={"https://twitter.com/mattzuckermann"}>
              <img
                style={{ margin: "0px 5px" }}
                className="iconFooter"
                src={twitterIcon}
                alt="twitter"
              />
            </FooterLink>
            <span> </span>

            <FooterLink link={"https://github.com/mattzuckermann"}>
              <img className="iconFooter" src={githubIcon} alt="github" />
            </FooterLink>
          </div>

          <div>
            <div className="footerNoLink copyrightDiv">
              <div>
                <button
                  className="arrowButton"
                  style={{ backgroundColor: "inherit", border: "none" }}
                  onClick={() => setRefIndex(0)}
                >
                  <img
                    className="buttonImage"
                    style={{ width: "2.5em" }}
                    src={arrowImages[1]}
                    alt="arrow-button"
                  />
                  <div
                    id="backToTopText"
                    className="noDecoration"
                    style={{ fontSize: "1.3em" }}
                  >
                    Back To Top
                  </div>
                </button>
              </div>
              <br />
              <div className="contactMe" style={{ fontSize: "0.9em" }}>
                Copyright ©{new Date().getFullYear()} Matt Zuckermann. All
                Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </footer>
  )
}

export default Footer
