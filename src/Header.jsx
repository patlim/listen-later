import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import { addEntry } from "./actions/entry"

class Header extends React.Component {
  state = {
    addLink: "",
    addCategory: "",
  }

  handleInputChange = (evt) => {
    const target = evt.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  submitHandler = () => {
    console.log("submitHandler")

    this.props.dispatch(addEntry(this.state))
  }
  render() {
    const HeaderWrapper = styled.div`
      width: 30%;
      float: left;
      padding: 10px 0 0 20px;
    `
    const Header = styled.header`
      color: #000;
      font-family: Avenir;
      font-size: 50px;
      font-style: oblique;
      font-weight: 900;
    `
    const Form = styled.form`
      width: 70%;
      align-self: center;
      margin: auto;
      padding-top: 20px;
    `
    const InputLink = styled.input`
      position: relative;
      justify-content: center;
      align-items: center;
      text-align: left;
      height: 25px;
      width: 50%;
      border-radius: 100px;
      background-color: lightgrey;
      border: 0;
      font-size: 15px;
      margin: 10px 0 0 20px;
      padding: 10px 10px;
    `
    const InputTag = styled.input`
      position: relative;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 25px;
      width: 100px;
      border-radius: 100px;
      background-color: lightgrey;
      border: 0;
      font-size: 15px;
      margin: 10px 0 0 10px;
    `
    const Submit = styled.button`
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 25px;
      width: 100px;
      border-radius: 100px;
      background-color: lightgrey;
      border: 0;
      font-size: 15px;
      margin: 10px 0 0 20px;
    `

    return (
      <>
        <HeaderWrapper>
          <Header>LISTEN LATER</Header>
        </HeaderWrapper>
        <Form onSubmit={this.submitHandler}>
          <InputLink
            type="text"
            name="link"
            placeholder="add a link, then listen later"
            onChange={this.handleInputChange}
          />
          <InputTag
            type="text"
            name="category"
            placeholder="add tag"
            onChange={this.handleInputChange}
          />
          <Submit>Submit</Submit>
        </Form>
      </>
    )
  }
}

export default connect()(Header)
