import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    className={props.className}
    id={props.id}
    alt={props.alt}
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "zuckermannHeadShot.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        className={props.className}
        alt={props.alt}
        title={props.title}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)
export default Image
