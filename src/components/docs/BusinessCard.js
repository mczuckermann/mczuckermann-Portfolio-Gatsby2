import React, { Component } from "react"
import { Document, Page } from "react-pdf"
import mattCard from "./Matt-Zuckermann_Business-Card.pdf"

class BusinessCard extends Component {
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
        <Document file={mattCard} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    )
  }
}

export default BusinessCard
