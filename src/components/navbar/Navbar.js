import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import { Link, useStaticQuery, graphql } from "gatsby"

import BurgerMenu from "./BurgerMenu"
import CollapseMenu from "./CollapseMenu"

const Navbar = props => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  })

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  })

  const data = useStaticQuery(graphql`
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
    }
  `)

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <NavTitle>{data.site.siteMetadata.title}</NavTitle>
          <NavLinks style={linkAnimation}>
            {data.site.siteMetadata.menuLinks.map(L => (
              <Link to={L.link} key={L.name} activeClassName="active">
                {L.name}
              </Link>
            ))}
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.surface};
  z-index: 10;
  font-size: 1.4rem;
  user-select: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: ${props => props.theme.spacing.navbar};
`
//TODO: Remember to include the navbar height into the theme

const NavTitle = styled.h1`
  margin: auto 0;
  color: ${props => props.theme.colors.onSurface};
`

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: ${props => props.theme.colors.onSurface};
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.primary};
      border-bottom: ${props => `1px solid ${props.theme.colors.primary}`};
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
  .active {
    color: ${props => props.theme.colors.primary};
    border-bottom: ${props => `1px solid ${props.theme.colors.primary}`};
  }
`

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`
