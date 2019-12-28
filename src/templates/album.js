import React, { Component } from "react"
import { graphql } from "gatsby"
import Modal from "react-modal"

import Layout from "../components/layout"
import {
  AlbumTitle,
  AlbumHeader,
  HeaderImage,
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
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(fluid) {
    this.setState({ modalIsOpen: true, fluid })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = "#f00"
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
              position: "absolute",
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
            target="_blank"
            style={{
              width: "40vw",
            }}
          >
            <HeaderImage fluid={this.state.fluid}></HeaderImage>
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
            fluid(maxHeight: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
