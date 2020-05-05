import React from "react"

const DemoLineSnippets = () => {
  return (
    <div className="demoSnippets">
      <div
        style={{
          color: "white",
          fontSize: "16px",
          paddingLeft: "60px",
          paddingRight: "60px",
          margin: "0 5vw",
          lineHeight: "1.3",
          backgroundColor: "rgb(0,0,0,0.2)",
        }}
      >
        *For a demo version of{" "}
        <i>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="demoPassLinks"
            href="https://searcher-mczuckermann.herokuapp.com/"
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
