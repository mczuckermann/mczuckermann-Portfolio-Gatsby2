import PropTypes from "prop-types"
import React, { useState } from "react"
import { useSpring, animated, config } from "react-spring"
import { Waypoint } from "react-waypoint"
import arrow from "../../images/white-arrow.png"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  footerFormat: {
    padding: "60px 0px",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  noDecoration: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "white",
      textDecoration: "none",
    },
  },
  footerNoLinkDiv: {
    color: "grey",
    marginTop: "50px",
  },
  footerNoLinkSpan: {
    color: "grey",
  },
  contactMe: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  arrowButton: {
    transform: "rotate(180deg)",
    "&:hover": {
      color: "#40394a",
    },
  },
  footer: {
    fontSize: "15px",
    padding: "3px 0",
    textAlign: "center",
  },
})
const Footer = props => {
  const classes = useStyles()
  const [on, toggle] = useState(false)
  const fadeIn = useSpring({
    opacity: on ? 1 : 0,
    config: config.mollasses,
  })

  return (
    <div
      ref={props.refcontact}
      className={`${classes.footerFormat} container-full`}
    >
      <Waypoint
        bottomOffset="32%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
      />
      <animated.div style={fadeIn}>
        <div className={classes.contactMe}>Contact Me</div>
        <div>Let's work together!</div>
        <br />
        <div>
          <span className={classes.footerNoLinkSpan}>+1-217-722-4952</span> ||{" "}
          <a
            className={classes.noDecoration}
            href="mailto: mczuckermann@gmail.com"
          >
            mczuckermann@gmail.com
          </a>{" "}
          ||{" "}
          <a
            className={classes.noDecoration}
            href="https://twitter.com/mczuckermann"
            rel="noopener noreferrer"
            target="_blank"
          >
            @mczuckermann
          </a>
        </div>
        <div>
          <a
            className={classes.noDecoration}
            href="https://www.linkedin.com/in/mczuckermann/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          ||{" "}
          <a
            className={classes.noDecoration}
            href="https://mczuckermann.herokuapp.com/docs/Matt-Zuckermann_R%C3%A9sum%C3%A9.pdf#zoom=115"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>{" "}
          ||{" "}
          <a
            className={classes.noDecoration}
            href="https://github.com/mczuckermann"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>{" "}
        </div>
        <div>
          <a
            className={classes.noDecoration}
            href="https://mczuckermann.herokuapp.com/docs/Matt-Zuckermann_Business-Card.pdf#zoom=325"
            rel="noopener noreferrer"
            target="_blank"
          >
            Business Card
          </a>
        </div>
      </animated.div>
      <div className={`${classes.footer} container-full`}>
        <div className={`${classes.footerNoLinkDiv} "col-12"`}>
          <animated.div style={fadeIn}>
            <img
              className={classes.arrowButton}
              onClick={props.onClick}
              tabIndex="0"
              src={arrow}
              alt="arrow"
            />
            <div id="backToTopText">Back To Top</div>
          </animated.div>
          <br />
          <div> © 2019 mczuckermann. All Rights Reserved</div>
        </div>
      </div>
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
