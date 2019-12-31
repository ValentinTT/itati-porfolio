import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import SEO from "./seo"
import NavbarContainer from "./navbar/NavbarContainer"
import Theme from "../Theme"

const Layout = ({ children, title }) => {
  return (
    <Theme>
      <GlobalStyles />
      <SEO title={title} />
      <Container>
        <NavbarContainer />
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}{" "}
          <span style={{ marginLeft: "0.5rem" }}>Itati Tapia</span>
        </Footer>
      </Container>
    </Theme>
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

h1::selection {
  background: ${props => props.theme.colors.primary};
}
h1::-moz-selection {
  background: ${props => props.theme.colors.primary};
}
a::selection {
  background: ${props => props.theme.colors.primary};
}
a::-moz-selection {
  background: ${props => props.theme.colors.primary};
}
*::selection {
  background: ${props => props.theme.colors.primary};
}
*::-moz-selection {
  background: ${props => props.theme.colors.primary};
}
`

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
`

const Main = styled.main`
  flex-grow: 1;
  background-color: ${props => props.theme.colors.background};
  margin: 0 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Footer = styled.footer`
  background-color: ${props => props.theme.colors.surface};
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.onSurface};
  font-size: 1.2rem;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.19), 0 -3px 3px rgba(0, 0, 0, 0.23);
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
