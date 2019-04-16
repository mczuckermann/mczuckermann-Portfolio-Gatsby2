const path = require("path")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    createPage({
      path: `/docs/resume`,
      component: path.resolve("./src/components/docs/Resume.js"),
    })
    createPage({
      path: `/docs/business+card`,
      component: path.resolve("./src/components/docs/BusinessCard.js"),
    })
    resolve()
  })
}
