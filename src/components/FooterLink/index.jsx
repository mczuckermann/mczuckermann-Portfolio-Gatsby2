import React from "react"

const Footer = ({ link, children }) => {
  return (
    <React.Fragment>
      <a
        className="noDecoration"
        href={link}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    </React.Fragment>
  )
}

export default Footer
