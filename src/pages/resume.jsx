import React from "react"
import resume from "../../src/docs/Matt_Zuckermann_Resume.pdf"

const Resume = () => {
  return <embed src={resume} style={{ width: "100vw", height: "100vh" }} />
}

export default Resume
