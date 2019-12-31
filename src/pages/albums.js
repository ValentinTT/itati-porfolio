import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"

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
  console.log(allCovers)
  return (
    <Layout title="Albums">
      <AlbumsContainer>
        {allCovers.map((cover, i) => (
          <Album key={i}>
            <Link to={`/albums/${cover.url}`}>
              <AlbumCover fluid={cover.childImageSharp.fluid}></AlbumCover>
              <AlbumTitle>{cover.title}</AlbumTitle>
            </Link>
          </Album>
        ))}
      </AlbumsContainer>
    </Layout>
  )
}

const AlbumsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Album = styled.div`
  background-color: transparent;
  width: 300px;
  margin: 1rem;
  overflow: hidden;
  /* border-radius: 5%; */
  position: relative;
  box-shadow: 0px 10px 32px -10px rgba(0, 0, 0, 0.75);

  &:hover > a {
    & > p {
      /* transform: translateY(70%); */
      transform: scale(1.5);
      opacity: 0.5;
      color: ${props => props.theme.colors.primary};
    }
    & > div {
      transform: scale(1.1);
      opacity: 0.9;
    }
  }
`

const AlbumCover = styled(props => <Img {...props} />)`
  height: 300px;
  transition: all 0.25s ease-in-out;
`

const AlbumTitle = styled.p`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #222;
  color: white;
  text-align: center;
  font-size: 1.75rem;
  transition: all 0.25s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
`

export const query = graphql`
  query {
    allFile(filter: { name: { eq: "cover" } }) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            fluid {
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
