import React from "react"
import styled from "styled-components"

const Form = () => (
  <FormContainer>
    <MyForm action="post">
      <FormTitle>Send me an email</FormTitle>
      <Input type="text" placeholder="Your name" />
      <Input type="email" placeholder="email@address.com" />
      <MessageInput placeholder="Your message..."></MessageInput>
      <Row>
        <FormButton>Sumbit</FormButton>
      </Row>
    </MyForm>
  </FormContainer>
)

export default Form

const FormContainer = styled.div`
  grid-area: form;
  width: 100%;
  height: 100%;
`
const MyForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d5d6d6;
  padding: 1rem;
`

const FormTitle = styled.h1`
  color: #2d3436;
  font-size: 2.5rem;
  text-align: center;
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
  border-bottom: 1px #ffc14e solid;
  color: #2d3436;
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
    border: 1px #ffc14e solid;
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
  border-bottom: 1px #ffc14e solid;
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
    border: 1px #ffc14e solid;
  }
`

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`

const FormButton = styled.button`
  padding: 1rem;
  background-color: #2d3436;
  border: none;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 600;
  transition: all 0.25s linear;
  box-shadow: 0 8px 6px -6px black;

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
    color: #ffc14e;
  }
`
