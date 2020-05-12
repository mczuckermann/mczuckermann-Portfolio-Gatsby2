import React, { useState, useContext } from "react"
import { useSpring, animated, config } from "react-spring"
import { Waypoint } from "react-waypoint"
import { GlobalContext } from "../../pages"
import FooterLink from "../FooterLink"
import twitterIcon from "../../images/twitter.png"
import linkedinIcon from "../../images/linkedin.png"
import githubIcon from "../../images/github.png"
import darkArrow from "../../images/darkArrowButton.png"
import lightArrow from "../../images/lightArrowButton.png"
import "./footer.css"

const Footer = () => {
  const [on, toggle] = useState(false)
  const { allRefs, setRefIndex } = useContext(GlobalContext)
  const fadeIn = useSpring({
    opacity: on ? 1 : 0,
    config: config.molasses,
  })
  const arrowImages = [darkArrow, lightArrow]

  return (
    <div ref={allRefs[3]} className="footerBody">
      <Waypoint
        bottomOffset="50%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
        onLeave={() => {
          if (on) toggle(false)
        }}
      />
      <animated.div style={fadeIn}>
        <footer className="resizeFooter">
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

          <div className="footerLinesA" style={{ fontSize: "1.3em" }}>
            <FooterLink
              link={
                "https://mczuckermann.herokuapp.com/docs/Matt-Zuckermann_Business-Card.pdf#zoom=325"
              }
            >
              Business Card
            </FooterLink>
          </div>

          <div className="footerLinesB">
            <FooterLink link={"https://www.linkedin.com/in/mczuckermann/"}>
              <img className="iconFooter" src={linkedinIcon} alt="linkedin" />
            </FooterLink>
            <span> </span>
            <FooterLink link={"https://twitter.com/mczuckermann"}>
              <img
                style={{ margin: "0px 5px" }}
                className="iconFooter"
                src={twitterIcon}
                alt="twitter"
              />
            </FooterLink>
            <span> </span>
            <FooterLink link={"https://github.com/mczuckermann"}>
              <img className="iconFooter" src={githubIcon} alt="github" />
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
                    style={{ width: "4.5em" }}
                    onClick={() => {
                      setRefIndex(0)
                    }}
                    src={arrowImages[0]}
                    alt="arrow-button"
                  />
                </button>
                <div
                  id="backToTopText"
                  className="noDecoration"
                  style={{ fontSize: "1.3em" }}
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
