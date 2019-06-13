import React from "react";
import { Form } from "semantic-ui-react";
import styled from 'styled-components'


class AccountForm extends React.Component{
  state = { firstName: "", lastName: "", email: "" , favoriteAnimal: "", }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, })
  

  handleSubmit = (e) => e.preventDefault();
  

  render(){
    const { firstName, lastName, email, favoriteAnimal } = this.state

      return(
        <>
      <Form onSubmit={this.handleSubmit}>
        <StyledInput
        label="First Name: "
        placeholder="First Name"
        name="firstName"
        value={ firstName }
        onChange={ this.handleChange }>
        </StyledInput>

        <StyledInput
        label="Last Name: "
        placeholder="Last Name"
        name="lastName"
        value={ lastName }
        onChange={ this.handleChange }
        />

        <StyledInput
        label="Email: "
        placeholder="Email"
        name="email"
        value={ email }
        onChange={this.handleChange}
        />
          

        <Form.Select
          label="Favorite Animal"
          name="favoriteAnimal"
          value={ favoriteAnimal }
          options={ animalOptions }
          onChange={ this.handleChange }
          style={{ width: "50%"}} 
          >
        </Form.Select>

        <Form.Button>
          Update
        </Form.Button>
      </Form>
      </> 
    )
  }
}

const animalOptions = [
  {key: "1", text: "Tiger", value: "Tiger"},
  {key: "2", text: "Shark", value: "Shark"},
  {key: "3", text: "Panda", value: "Panda"},
  {key: "4", text: "Dolphin", value: "Dolphin"},
  {key: "5", text: "Sloth", value: "Sloth"},
  {key: "6", text: "Kangaroo", value: "Kangaroo"},
  {key: "7", text: "Swan", value: "Swan"},
  {key: "8", text: "Crocodile", value: "Crocodile"},
  {key: "9", text: "Hawk", value: "Hawk"},
  {key: "0", text: "Bat", value: "Bat"},
]

const StyledInput = styled(Form.Input)`
width: 50% !important;
`


export default AccountForm