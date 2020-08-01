import React from "react"

const DemoLineSnippets = () => {
  return (
    <div className="demoSnippets">
      <div
        className="demoBody"
      >
        *For a demo version of{" "}
        <i>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="demoPassLinks"
            href="https://www.codesnippets.app/"
          >
            Snippets.
          </a>
        </i>
        , use the username "<span className="demo">demo@demo.com</span>" with the password "<span className="demo">demo</span>
        "
      </div>
    </div>
  )
}

export default DemoLineSnippets
