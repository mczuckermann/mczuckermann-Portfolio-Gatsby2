import React from "react"

const DemoLineSnippets = (props) => {
  return (
    <div className="demoSnippets">
      <div
        style={{
          color: "white",
          fontSize: "16px",
          paddingLeft: "60px",
          paddingRight: "60px",
          margin: "0 15vw",
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
        , use the username "<u>demo@demo.com</u>" with the password "<u>demo</u>
        "
      </div>
    </div>
  )
}

export default DemoLineSnippets
