import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import FormContainer from "../components/Form"
import SocialNetworks from "../components/socialButtons/SocialNetworks"

const Contact = () => {
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "socials form";
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas: "form" " socials";
  }
`

export default Contact
