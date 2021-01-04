import React from "react"

const Footer = ({ link, className, children }) => {
  return (
    <React.Fragment>
      <a
        className={className}
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        title={children === "Cell" ? "+1 (217) 722-4952" : ""}
      >
        {children}
      </a>
    </React.Fragment>
  )
}

export default Footer
