import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import SEO from "./seo"
import NavbarContainer from "./navbar/NavbarContainer"

const Layout = ({ children, title }) => {
  return (
    <>
      <GlobalStyles />
      <SEO title={title} />
      <Container>
        <NavbarContainer />
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          <a
            href="https://www.gatsbyjs.org"
            style={{
              marginLeft: "0.25rem",
              color: "#ffc14e",
            }}
          >
            Gatsby
          </a>
        </Footer>
      </Container>
    </>
  )
}

const GlobalStyles = createGlobalStyle`
/* 
* Purpose:
* Assign height: "100%" to
* html, body, #___gatsby &  
* div with role="group"
*/
html {
  overflow-x: hidden;
}

html, body, #___gatsby {
   height: 100%;
}

body {
   margin: 0px;
}

div[role="group"][tabindex] {
   height: 100%;
}
`

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #d5d6d6;
`

const Main = styled.main`
  flex-grow: 1;
  background-color: #d5d6d6;
  margin: 0 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Footer = styled.footer`
  background-color: #2d3436;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
