import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { Drawer } from "@material-ui/core"

import { addEntryAndCategory, addEntry } from "./actions/entry"
import { triggerDrawer } from "./actions/linkDrawer"

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
  width: 25%;
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
const Error = styled.p`
  margin-left: 10px;
  color: red;
`

class LinkDrawer extends React.Component {
  state = {
    link: "",
    name: "",
    artist: "",
    category: "",
    error: "",
  }

  toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    this.props.dispatch(triggerDrawer(open))
  }

  handleInputChange = (evt) => {
    const value = evt.target.value
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    })
  }

  submitHandler = (e) => {
    const { link, name, artist, category } = this.state
    if (link === "" || name === "" || artist === "" || category === "") {
      e.preventDefault()
      this.setState({ error: "Please fill out all fields" })
    } else {
      this.props.dispatch(addEntry(this.state))
      this.setState({
        link: "",
        name: "",
        artist: "",
        category: "",
        error: "",
      })
      e.preventDefault()
      this.props.dispatch(triggerDrawer(false))
    }
  }

  render() {
    const { drawer } = this.props
    return (
      <Drawer anchor="right" open={drawer} onClose={this.toggleDrawer(false)}>
        <div role="presentation">
          <Form>
            <div>
              <h1 style={{ marginLeft: "10px" }}>Add Link</h1>
              <InputLink
                type="text"
                name="link"
                placeholder="add a link, then listen later"
                value={this.state.link}
                onChange={(e) => this.setState({ link: e.target.value })}
              />
            </div>
            <div>
              <Input
                type="text"
                name="name"
                placeholder="name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <Input
                type="text"
                name="artist"
                placeholder="artist"
                value={this.state.artist}
                onChange={(e) => this.setState({ artist: e.target.value })}
              />
              <Input
                type="text"
                name="category"
                placeholder="tag"
                value={this.state.category}
                onChange={(e) => this.setState({ category: e.target.value })}
              />
              <Submit onClick={this.submitHandler}>Submit</Submit>
              <Error>{this.state.error}</Error>
            </div>
          </Form>
        </div>
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => ({
  drawer: state.linkDrawer,
})

export default connect(mapStateToProps)(LinkDrawer)
