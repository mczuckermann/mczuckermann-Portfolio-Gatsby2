import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ className, id, alt, title }) => (
  <StaticQuery
    className={className}
    id={id}
    alt={alt}
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "zuckermannHeadShot.webp" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img
        className={className}
        alt={alt}
        title={title}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)
export default Image
