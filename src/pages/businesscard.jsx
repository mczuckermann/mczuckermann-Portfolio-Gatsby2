import React from "react"
import GoogleDocsViewer from "react-google-docs-viewer"

const BusinessCard = () => {
  return (
    <GoogleDocsViewer
      width="100vw"
      height="100vh"
      fileUrl="https://res.cloudinary.com/joshzuckermann-netlify-com/image/upload/v1595947597/Matt_Zuckermann_Business_Card.pdf"
    />
  )
}

export default BusinessCard