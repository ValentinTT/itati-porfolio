import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import FormContainer from "../components/Form"
import SocialNetworks from "../components/socialButtons/SocialNetworks"

const Contact = ({ data }) => {
  return (
    <Layout title="Contact">
      <Container>
        <SocialNetworks />
        <FormContainer />
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "socials form";
  grid-gap: ${props => props.theme.spacing.medium};
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas: "form" " socials";
    grid-gap: ${props => props.theme.spacing.small};
  }
`
export default Contact
