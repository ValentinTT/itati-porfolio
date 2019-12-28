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
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1;
  user-select: none;
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
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }

  .active {
    color: #fdcb6e;
  }
`
