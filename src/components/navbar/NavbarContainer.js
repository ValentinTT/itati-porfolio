import React, { Component } from "react"
import Navbar from "./Navbar"
import styled, { createGlobalStyle } from "styled-components"

class NavbarContainer extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {
    return (
      <Navbarcontainer>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyles />
      </Navbarcontainer>
    )
  }
}

export default NavbarContainer

const Navbarcontainer = styled.div`
  margin-bottom: 100px;
`

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
  }
  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`
