import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery } from "gatsby"

import { useSpring, animated } from "react-spring"

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 })

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

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          {data.site.siteMetadata.menuLinks.map(L => (
            <li key={L.name}>
              <Link
                to={L.link}
                onClick={props.handleNavbar}
                activeClassName="active"
              >
                {L.name}
              </Link>
            </li>
          ))}
        </NavLinks>
      </CollapseWrapper>
    )
  }
  return null
}

export default CollapseMenu

const CollapseWrapper = styled(animated.div)`
  background: ${props => props.theme.colors.surface};
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1;
  user-select: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: ${props => props.theme.colors.onSurface};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.primary};
      border-bottom: ${props => `1px solid ${props.theme.colors.primary}`};
    }
  }

  .active {
    color: ${props => props.theme.colors.primary};
  }
`
