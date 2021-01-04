import React, { useState, useContext } from "react"
import { useSpring, animated, config } from "react-spring"
import { Waypoint } from "react-waypoint"
import { GlobalContext } from "../../pages"
import FooterLink from "../FooterLink"
import { socialInfo, personalInfo } from "../../js/footerLinks"
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
            {personalInfo.map(({ link, children, title }) => {
              return (
                <FooterLink title={title} className="noDecoration" link={link}>
                  {children(windowWidth)}
                </FooterLink>
              )
            })}
          </nav>
          <nav>
            {socialInfo.map(({ link, src, alt }) => {
              return (
                <FooterLink link={link}>
                  <img src={src} alt={alt} />
                </FooterLink>
              )
            })}
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
