import PropTypes from "prop-types"
import React from "react"
import arrow from "../images/white-arrow.png"

const Footer = props => (
  <div className="container-full centerBody footerBackground">
    <div className="contactMe">Contact Me</div>
    <div>Let's work together!</div>
    <br />
    <div>
      <span className="noFooterLink">+1-217-722-4952</span> ||{" "}
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
    <footer className="container-full">
      <div className="col-12 noFooterLink copyrightDiv">
        <div className="arrowImage">
          <img onClick={props.onClick} src={arrow} alt="arrow" />
        </div>
        <br />
        <div> © 2019 mczuckermann. All Rights Reserved</div>
      </div>
    </footer>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
