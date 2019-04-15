// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <div className="container-full">
    <div className="container-full footerEdging" />
    <footer className="container-full">
      <div className="col-12">Copyright &copy;</div>
    </footer>
    <div className="container-full footerEdging" />
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
