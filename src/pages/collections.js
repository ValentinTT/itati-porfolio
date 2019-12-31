import React, { Component } from "react"
import { graphql } from "gatsby"
import Modal from "react-modal"

import Layout from "../components/layout"
import {
  ModalImage,
  AlbumTitle,
  AlbumHeader,
  HeaderImage,
  AlbumContainer,
  ImageContainer,
  Image,
  MyModal,
} from "../templates/albumStyles"

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
    console.log("Props: ", data)
    const title = data.markdownRemark.frontmatter.title
    return (
      <Layout title={title}>
        <MyModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          {/* The <div> element is used as a way to get out of the modal */}
          {/* eslint-disable-next-line*/}
          <div
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              background: "transparent",
            }}
            onClick={this.closeModal}
          ></div>
          <div
            style={{
              position: "fixed" /* or absolute */,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "2rem",
              background: "transparent",
              color: "white",
              zIndex: "100",
            }}
          >
            Click image to open on a new tab
          </div>
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
        <AlbumTitle>{title}</AlbumTitle>
        <AlbumHeader
          onClick={() =>
            this.openModal(data.allFile.edges[0].node.childImageSharp.fluid)
          }
        >
          {console.log(data.allFile.edges[0].node.childImageSharp.fluid)}
          <HeaderImage
            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          />
        </AlbumHeader>
        <AlbumContainer>
          {/* <ImgHeader></ImgHeader> */}
          {data.allFile.edges.slice(1).map((img, i) => (
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

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "albums/black-and-white" } }) {
      frontmatter {
        title
      }
    }
    allFile(
      filter: {
        relativeDirectory: { eq: "black-and-white" }
        ext: { ne: ".md" }
      }
    ) {
      edges {
        node {
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

export default Album
