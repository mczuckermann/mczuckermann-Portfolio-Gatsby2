import React from "react"

const DemoLineNYT = props => {
  return (
    <div className="demoNYT">
      <div
        style={{
          color: "white",
          fontSize: "16px",
          paddingLeft: "16px",
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
            Best Seller Searcher
          </a>
        </i>
        , use the username "<u>demo@demo.com</u>" with the password "<u>demo</u>
      </div>
    </div>
  )
}

export default DemoLineNYT
