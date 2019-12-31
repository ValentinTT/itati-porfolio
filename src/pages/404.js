import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/Title"

const NotFoundPage = ({ data }) => (
  <Layout>
    <Container>
      <SEO title="404: Not found" />
      <ImgContainer>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImgContainer>
      <Title>NOT FOUND</Title>
      <p style={{ fontSize: "1.25rem" }}>
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </Container>
  </Layout>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImgContainer = styled.div`
  width: 40vw;
  object-fit: cover;
  padding-bottom: 1rem;
`

export const query = graphql`
  query {
    file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default NotFoundPage
