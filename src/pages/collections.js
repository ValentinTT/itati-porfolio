import React, { Component } from "react"
import { graphql } from "gatsby"
import Modal from "react-modal"

import Layout from "../components/layout"
import {
  ModalImage,
  ModalOverlay,
  ModalBackground,
  AlbumTitle,
  AlbumContainer,
  ImageContainer,
  Image,
  MyModal,
} from "../templates/albumStyles"
import styled from "styled-components"

Modal.setAppElement("#___gatsby")
class Collection extends Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
      fluid: 1,
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(fluid) {
    this.setState({ modalIsOpen: true, fluid })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  splitCollections = data => {
    let collections = [[data[0].node]]
    let index = 0
    let prev = data[0].node.relativeDirectory
    for (let i = 1; i < data.length; i++) {
      if (data[i].node.relativeDirectory !== prev) {
        collections.push([data[i].node])
        index++
        prev = data[i].node.relativeDirectory
      } else collections[index].push(data[i].node)
    }
    return collections
  }

  render() {
    const data = this.props.data.allFile.edges
    const collections = this.splitCollections(data)
    return (
      <Layout title={"Collections"}>
        <MyModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          {/* The <div> element is used as a way to get out of the modal */}
          {/* eslint-disable-next-line*/}
          <ModalBackground onClick={this.closeModal}></ModalBackground>
          <ModalOverlay>Click image to open on a new tab</ModalOverlay>
          <a
            href={this.state.fluid.src}
            rel="noopener noreferrer"
            target="_blank"
            style={{
              width: "90vw",
              maxWidth: "600px",
            }}
          >
            <ModalImage fluid={this.state.fluid}></ModalImage>
          </a>
        </MyModal>
        {collections.map((collection, index) => (
          <CollectionContainer key={index}>
            <AlbumTitle>{collection[0].relativeDirectory}</AlbumTitle>
            <AlbumContainer>
              {collection.map((img, i) => (
                <ImageContainer
                  key={i}
                  onClick={() => this.openModal(img.childImageSharp.fluid)}
                >
                  <Image fluid={img.childImageSharp.fluid} />
                </ImageContainer>
              ))}
            </AlbumContainer>
          </CollectionContainer>
        ))}
      </Layout>
    )
  }
}

const CollectionContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
`

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "collections" } }
      sort: { fields: relativeDirectory }
    ) {
      edges {
        node {
          name
          relativeDirectory
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Collection
