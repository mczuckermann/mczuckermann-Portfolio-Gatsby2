import React, { useState, useContext } from "react"
import { useSpring, animated, config } from "react-spring"
import { Waypoint } from "react-waypoint"
import { GlobalContext } from "../../pages"
import FooterLink from "../FooterLink"
import twitterIcon from "../../images/icons/twitter.webp"
import linkedinIcon from "../../images/icons/linkedin.webp"
import githubIcon from "../../images/icons/github.webp"
import "./footer.css"

const Footer = () => {
  const [on, toggle] = useState(false)
  const { setRefIndex, allRefs, windowWidth } = useContext(GlobalContext)
  const fadeIn = useSpring({
    opacity: on ? 1 : 0,
    config: on ? config.molasses : { duration: 300 },
  })

  return (
    <footer ref={allRefs[3]} className="footerBody">
      <Waypoint
        bottomOffset="80%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
        onLeave={() => {
          if (on) toggle(false)
        }}
      />
      <animated.div className="flexBody resizeFooter" style={fadeIn}>
        <main>
          <h2 className="contactMe" style={{ fontSize: "8.0em" }}>
            Contact Me
          </h2>
          <nav style={{ fontSize: "1.8em" }}>
            <FooterLink
              title="+1 (217) 722-4952"
              className="noDecoration"
              link={"tel:1-217-722-4952"}
            >
              {windowWidth >= 500 ? "+1 (217) 722-4952" : "Cell"}
            </FooterLink>
            <FooterLink
              className="noDecoration"
              link={"mailto:matt@mattzuckermann.dev"}
            >
              matt@mattzuckermann.dev
            </FooterLink>
            <FooterLink className="noDecoration" link={"/resume"}>
              Resume
            </FooterLink>
          </nav>
          <nav>
            <FooterLink link={"https://www.linkedin.com/in/mattzuckermann/"}>
              <img src={linkedinIcon} alt="linkedin" />
            </FooterLink>
            <FooterLink link={"https://twitter.com/mattzuckermann"}>
              <img src={twitterIcon} alt="twitter" />
            </FooterLink>
            <FooterLink link={"https://github.com/mattzuckermann"}>
              <img src={githubIcon} alt="github" />
            </FooterLink>
          </nav>
          <button
            className="noDecoration"
            style={{
              backgroundColor: "inherit",
              border: "none",
              fontSize: "1.8em",
            }}
            onClick={() => setRefIndex(0)}
          >
            Back To Top
          </button>
          <p className="contactMe" style={{ fontSize: "1.3em" }}>
            Copyright ©{new Date().getFullYear()} Matt Zuckermann. All Rights
            Reserved
          </p>
        </main>
      </animated.div>
    </footer>
  )
}

export default Footer
