import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled, { createGlobalStyle } from "styled-components"
import SEO from "../components/seo"
import Theme from "../Theme"

const IndexPage = () => {
  return (
    <Theme>
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
            <Background
              Tag="section"
              fluid={imageData}
              backgroundColor={`#040e18`}
            >
              <SEO title="Home" />
              <Header>
                {data.site.siteMetadata.title.split(" ").map(T => (
                  <>
                    <h1>{T.toUpperCase()}</h1>
                    <br />
                  </>
                ))}
              </Header>
              <Nav>
                {links.map(L => (
                  <NavItem key={L.name}>
                    <Link to={L.link} key={L.name}>
                      {L.name}
                    </Link>
                  </NavItem>
                ))}
              </Nav>
            </Background>
          )
        }}
      />
    </Theme>
  )
}

export default IndexPage

const GlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
  }
  h1 {
    font-weight: 100;
  }
`
const Background = styled(props => <BackgroundImage {...props} />)`
  height: 100vh;
  display: grid;
  user-select: none;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr;
  grid-template-areas: "header" "sidebar";
  background-color: #aaa;
  // OPT 1
  background-size: auto 100%;
  background-repeat: repeat;
`

const Header = styled.header`
  grid-area: header;
  margin-top: 1rem;
  margin-left: 1rem;
  /* Black box
   padding-bottom: 1rem;
   background-color: #111;
   width: fit-content; */
  h1 {
    margin: 0;
    margin: 0 1rem;
    margin-top: 1rem;
    width: auto;
    color: ${props => props.theme.colors.surface};
    font-size: ${props => props.theme.fontSizes.large};
    font-weight: 900;
    display: inline-block;
    /* border-bottom: ${props => `5px solid ${props.theme.colors.primary}`}; */
  }
`
const Nav = styled.nav`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  text-align: right;
  padding-right: 1rem;
`

const NavItem = styled.li`
  list-style-type: none;
  * {
    /* font-size: ${props => props.theme.fontSizes.medium}; */
    font-size: 1.25rem;
    color: ${props => props.theme.colors.surface};
    transition: color 0.25s ease-in-out;
    position: relative;
    text-decoration: none;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${props => props.theme.colors.primary};
      transform: scale(0);
      transition: transform 0.25s;
    }
    &:hover {
      color: ${props => props.theme.colors.surface};
      &::after {
        transform: scale(1);
      }
    }
  }
`
