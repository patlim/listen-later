import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { Button, Drawer } from "@material-ui/core"

import { addEntry } from "./actions/entry"

const HeaderWrapper = styled.div`
  width: 30%;
  float: left;
  padding: 10px 0 0 20px;
`
const TitleHeader = styled.header`
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
  width: 100%;
  border-radius: 100px;
  background-color: lightgrey;
  border: 0;
  font-size: 15px;
  margin: 10px 0 0 10px;
  padding: 10px 10px;
`
const Input = styled.input`
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
  margin: 10px 0 0 10px;
`

class Header extends React.Component {
  state = {
    link: "",
    name: "",
    artist: "",
    category: "",
    drawer: false,
  }

  toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    this.setState({ drawer: open })
  }

  handleInputChange = (evt) => {
    const value = evt.target.value
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    })
  }

  submitHandler = (e) => {
    this.props.dispatch(addEntry(this.state))
    this.setState({
      link: "",
      name: "",
      artist: "",
      category: "",
    })
    e.preventDefault()
  }

  render() {
    return (
      <>
        <HeaderWrapper>
          <TitleHeader>LISTEN LATER</TitleHeader>
        </HeaderWrapper>
        <Button onClick={this.toggleDrawer(true)}>Add Link</Button>
        <Drawer
        width={5}
          anchor="Drawer"
          open={this.state.drawer}
          onClose={this.toggleDrawer(false)}
        >
          <div
            role="presentation"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <Form>
              <div>
                <h1 style={{marginLeft: '10px'}}>Add Link</h1>
                <InputLink
                  type="text"
                  name="link"
                  placeholder="add a link, then listen later"
                  value={this.state.link}
                  onChange={(e) => this.setState({ link: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  required
                />
                <Input
                  type="text"
                  name="artist"
                  placeholder="artist"
                  value={this.state.artist}
                  onChange={(e) => this.setState({ artist: e.target.value })}
                  required
                />
                <Input
                  type="text"
                  name="category"
                  placeholder="tag"
                  value={this.state.category}
                  onChange={(e) => this.setState({ category: e.target.value })}
                  required
                />
                <Submit onClick={this.submitHandler}>Submit</Submit>
              </div>
            </Form>
          </div>
        </Drawer>
      </>
    )
  }
}

export default connect()(Header)