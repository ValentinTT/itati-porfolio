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
} from "./albumStyles"

Modal.setAppElement("#___gatsby")
class Album extends Component {
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

  render() {
    const data = this.props.data
    const index = data.allFile.edges.findIndex(n => n.node.name === "cover")
    const files = [
      data.allFile.edges[index],
      ...data.allFile.edges.slice(0, index),
      ...data.allFile.edges.slice(index + 1),
    ]
    return (
      <Layout title={data.markdownRemark.frontmatter.title}>
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
        <AlbumTitle>{data.markdownRemark.frontmatter.title}</AlbumTitle>
        <AlbumContainer>
          {files.map((img, i) => (
            <ImageContainer
              key={i}
              onClick={() => this.openModal(img.node.childImageSharp.fluid)}
            >
              <Image fluid={img.node.childImageSharp.fluid} />
            </ImageContainer>
          ))}
        </AlbumContainer>
      </Layout>
    )
  }
}

export default Album

export const query = graphql`
  query($slug: String!, $relativeDirectory: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
    allFile(
      filter: {
        relativeDirectory: { eq: $relativeDirectory }
        ext: { ne: ".md" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`
