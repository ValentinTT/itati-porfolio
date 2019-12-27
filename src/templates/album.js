import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import NavbarContainer from "../components/navbar/NavbarContainer"
import AlbumStyles from "./album.module.scss"

const Album = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  return (
    <div>
      <SEO title={title} />
      <NavbarContainer />
      <h1>{title}</h1>
      {data.allFile.edges.map((img, i) => (
        <Img
          key={i}
          fluid={img.node.childImageSharp.fluid}
          className={AlbumStyles.container}
        ></Img>
      ))}
    </div>
  )
}

export const query = graphql`
  query($slug: String!, $relativeDirectory: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
    allFile(
      filter: {
        relativeDirectory: { eq: $relativeDirectory }
        ext: { ne: ".md" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Album
