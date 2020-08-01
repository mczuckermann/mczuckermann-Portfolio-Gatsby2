import React from "react"
import GoogleDocsViewer from "react-google-docs-viewer"

const Resume = () => {
  return (
    <GoogleDocsViewer
      width="100vw"
      height="100vh"
      fileUrl="https://res.cloudinary.com/joshzuckermann-netlify-com/image/upload/v1596239918/Matt_Zuckermann_Resume.pdf"
    />
  )
}

export default Resume