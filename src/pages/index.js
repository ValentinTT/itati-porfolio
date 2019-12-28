import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { createGlobalStyle } from "styled-components"
import SEO from "../components/seo"
import IndexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                menuLinks {
                  name
                  link
                }
              }
            }
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
          const links = data.site.siteMetadata.menuLinks
          return (
            <BackgroundImage
              Tag="section"
              className={IndexStyles.wrapper}
              fluid={imageData}
              backgroundColor={`#040e18`}
            >
              <SEO title="Home" />
              <header className={IndexStyles.header}>
                {data.site.siteMetadata.title.split(" ").map(T => (
                  <>
                    <h1>{T}</h1>
                    <br />
                  </>
                ))}
              </header>
              <nav className={IndexStyles.nav}>
                {links.map(L => (
                  <li className={IndexStyles.navItem} key={L.name}>
                    <Link to={L.link} key={L.name}>
                      {L.name}
                    </Link>
                  </li>
                ))}
              </nav>
            </BackgroundImage>
          )
        }}
      />
    </>
  )
}

export default IndexPage

const GlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
  }
`
