import React from "react"
import { StaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import SEO from "../components/seo"

import "./index.scss"

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "home-bg.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            className="wrapper"
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <SEO title="Home" />
            <header>
              <h1>Itati</h1>
              <h1>Tapia</h1>
            </header>
            <nav>
              <div className="nav-item">
                <Link to="/">Home</Link>
              </div>
              <div className="nav-item">
                <Link to="/404">Photo Albums</Link>
              </div>
              <div className="nav-item">
                <Link to="/404">Collections</Link>
              </div>
              <div className="nav-item">
                <Link to="/404">Contact</Link>
              </div>
            </nav>
          </BackgroundImage>
        )
      }}
    />
  )
}

export default IndexPage
