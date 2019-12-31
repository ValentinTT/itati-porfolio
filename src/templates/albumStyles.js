import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Modal from "react-modal"

export const ModalImage = styled(props => <Img {...props} />)`
  width: 90vw;
  max-width: 600px;
  transition: all 0.25s linear;
  &:hover {
    opacity: 0.9;
  }
`

export const ModalBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: transparent;
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  margin: 0;
  background: transparent;
  color: #fff;
  z-index: 100;
`
export const AlbumTitle = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: 500;
`
export const AlbumHeader = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  width: 100%;
  margin-bottom: 2rem;
`
export const HeaderImage = styled(props => <Img {...props} />)`
  width: 90vw;
  max-width: 600px;
  transition: all 0.25s linear;
  &:hover {
    opacity: 0.9;
  }
`

export const AlbumContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 350px 250px;
  grid-auto-flow: dense;

  /* @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`

export const ImageContainer = styled.div`
  /* height: 250px;*/
  overflow: hidden;
  &:hover > div {
    transform: scale(1.1);
    opacity: 0.9;
  }
  & > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 480px) {
    &:first-child {
      grid-area: 1 / 1 / span 2 / span 2;
    }
    &:nth-child(3n) {
      grid-column: span 2;
    }
  }
`
export const Image = styled(props => <Img {...props} />)`
  height: 100%;
  width: 100%;
  transition: all 0.25s linear;
`
export const MyModal = styled(props => <Modal {...props} />)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111111a0;
  position: relative;
`
