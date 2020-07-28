import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This route doesn&#39;t exist.</p>
    <p><a href="/">Back to home page</a></p>
  </Layout>
)

export default NotFoundPage
