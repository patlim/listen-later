import React, { Component } from "react"
import styled from "styled-components"

import Tag from "./Tag"

class Nav extends Component {
  state = {
    taglist: [
      { id: 1, tag: "#house" },
      { id: 2, tag: "#jazz" },
      { id: 3, tag: "#rnb" },
      { id: 4, tag: "#hiphop" },
      { id: 5, tag: "#soul" },
    ],
  }

  render() {
    const NavContainer = styled.nav`
      float: left;
    `
    const NavHeader = styled.div`
      height: 31px;
      width: 166px;
      color: #000;
      font-family: Helvetica;
      font-size: 25px;
      font-weight: 700;
      line-height: 25px;
      text-align: center;
    `

    return (
      <NavContainer>
        <NavHeader>Categories</NavHeader>
        {this.state.taglist.map((t) => (
          <Tag key={t.id} tag={t.tag} />
        ))}
        <Tag tag="more" />
        <Tag tag="+" />
      </NavContainer>
    )
  }
}

export default Nav
