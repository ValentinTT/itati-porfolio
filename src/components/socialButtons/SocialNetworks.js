import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"

import SocialStyles from "./socialStyles.module.scss"

const SocialNetworks = () => (
  <Container>
    <MeidaTitle>My Social Networks</MeidaTitle>
    <ButtonsContainer>
      <SocialButton
        href="https://www.instagram.com/itati_tapia/"
        target="_blank"
        rel="noopener noreferrer"
        className={SocialStyles.instagram}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </SocialButton>
    </ButtonsContainer>
  </Container>
)

export default SocialNetworks

const MeidaTitle = styled.h1`
  color: #2d3436;
  font-size: 2.5rem;
  text-align: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SocialButton = styled.a`
  display: inline-block;
  background-color: #fff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  margin: 2rem 1rem;
  /* margin-left: 0 !important;
  margin-right: 15px !important; */
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: 0.99;
  border-radius: 50%;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.06);
  -webkit-transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
  transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);

  &::before {
    content: "";
    width: 120%;
    height: 120%;
    position: absolute;
    top: 90%;
    left: -110%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.79);
    transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.79);
  }

  &:hover:before {
    top: -10%;
    left: -10%;
  }

  &:focus {
    opacity: 0.85;
  }

  &:hover > * {
    color: #fff;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  & > * {
    font-size: 28px;
    vertical-align: middle;
    -webkit-transform: scale(0.75);
    -ms-transform: scale(0.75);
    transform: scale(0.75);
    -webkit-transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
    transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
  }
`
