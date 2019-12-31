import React from "react"
import styled from "styled-components"
import Title from "./Title"

const Form = () => (
  <FormContainer>
    <MyForm
      method="post"
      name="contact-form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Title>Send me an email</Title>
      <Input name="name" type="text" placeholder="Your name" />
      <Input name="email" type="email" placeholder="email@address.com" />
      <MessageInput name="message" placeholder="Your message..."></MessageInput>
      <Row>
        <FormButton>Sumbit</FormButton>
      </Row>
    </MyForm>
  </FormContainer>
)

export default Form

const FormContainer = styled.div`
  grid-area: form;
  height: fit-content;
  background: ${props => props.theme.colors.surface};
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  /* margin: ${props => "0 " + props.theme.spacing.medium}; */
`
const MyForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  padding: 1rem;
`

const Input = styled.input.attrs({
  type: "text",
  placeholder: props => props.placeholder || "Please fill",
})`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
  border: 0;
  border: 1px transparent solid;
  border-bottom: ${props => `1px solid ${props.theme.colors.primary}`};
  color: ${props => props.theme.colors.onBackground};
  font-size: 1.25rem;
  background-color: #fff;
  transition: all 0.1s linear;
  &:focus,
  &:valid,
  &:invalid {
    outline: none;
    background-color: #fff;
  }
  &:focus {
    border: ${props => `1px solid ${props.theme.colors.primary}`};
  }
`

const MessageInput = styled.textarea`
  height: 200px;
  min-height: 100px;
  resize: vertical;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
  border: 0;
  border: 1px transparent solid;
  border-bottom: ${props => `1px solid ${props.theme.colors.primary}`};
  color: #2d3436;
  font-size: 1.25rem;
  background-color: #fff;
  &:focus,
  &:valid,
  &:invalid {
    outline: none;
    background-color: #fff;
  }
  &:focus {
    border: ${props => `1px solid ${props.theme.colors.primary}`};
  }
`

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`

const FormButton = styled.button`
  padding: 1rem;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.onPrimary};
  font-weight: 600;
  transition: all 0.25s linear;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  &:active {
    box-shadow: none;
  }

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`
