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
        placeholderImage: file(relativePath: { eq: "zuckermannHeadShot.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
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
