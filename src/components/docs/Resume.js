import React, { Component } from "react"
import { Document, Page } from "react-pdf"
import mattResume from "./Matt-Zuckermann_Résumé.pdf"
import "bootstrap/dist/css/bootstrap.css"

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  render() {
    const { pageNumber } = this.state

    return (
      <div>
        <div className="container-full">
          <div className="row" />
          <div className="row">
            <div className="col-12">
              <Document
                file={mattResume}
                // style={{ width: "50000", height: "auto" }}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
