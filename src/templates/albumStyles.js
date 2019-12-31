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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1200px) {
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
  }
`

export const ImageContainer = styled.div`
  height: 250px;
  overflow: hidden;
  &:hover > div {
    transform: scale(1.1);
    opacity: 0.9;
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
