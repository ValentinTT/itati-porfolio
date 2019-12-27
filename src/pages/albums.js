import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import NavbarContainer from "../components/navbar/NavbarContainer"
import AlbumsStyles from "./albums.module.scss"

const AlbumsPage = ({ data }) => {
  const allMarkdown = data.allMarkdownRemark.edges.map(n => ({
    title: n.node.frontmatter.title,
    url: n.node.frontmatter.url,
  }))
  const allCovers = data.allFile.edges.map(n => {
    let obj = allMarkdown.find(e => e.url === n.node.relativeDirectory) || {}
    return {
      childImageSharp: n.node.childImageSharp,
      ...obj,
    }
  })
  console.log("All Covers: ", allCovers)

  return (
    <div style={{ height: "400vh" }}>
      <SEO title="Albums" />
      <NavbarContainer />
      <div className={AlbumsStyles.container}>
        {allCovers.map((cover, i) => (
          <div key={i} className={AlbumsStyles.coverContainer}>
            <Link to={`/albums/${cover.url}`}>
              <Img
                fluid={cover.childImageSharp.fluid}
                className={AlbumsStyles.cover}
              ></Img>
              <div className={AlbumsStyles.title}>{cover.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allFile(filter: { name: { eq: "cover" } }) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            url
          }
        }
      }
    }
  }
`

export default AlbumsPage
