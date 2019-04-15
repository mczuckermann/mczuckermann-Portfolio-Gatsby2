// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="container-full" id="headerBackground">
    <div className="container-full footerEdging" />
    <nav className="container navbar navbar-expand-sm navbar-light">
      <div className="navbar-brand" id="header">
        <span id="nameNav" className="responsiveText rounded">
          Matt Zuckermann
        </span>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" id="header">
          <li className="nav-item" id="aboutNav">
            <span className="navSubObjects rounded" divTarget="aboutBody">
              About Me
            </span>
          </li>
          <li className="nav-item" id="projectsNav">
            <span className="navSubObjects rounded" divTarget="projectsBody">
              Apps/Projects
            </span>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container-full footerEdging" />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
