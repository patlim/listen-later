import React, { Component } from "react"
import styled from "styled-components"

import NavItem from "./NavItem"

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
    const NavContainer = styled.ul`
      float: left;
      max-width: 15%;
      list-style: "none";
    `
    const NavHeader = styled.li`
      font-weight: 700;
      padding: 15px;
      border-bottom: .5px solid lightgrey;
    `

    return (
      <NavContainer className="col">
        <NavHeader>Categories</NavHeader>
        {this.state.taglist.map((t) => (
          <NavItem key={t.id} tag={t.tag} />
        ))}
        <NavItem tag="more" style={{alignSelf: 'flex-end'}} />
      </NavContainer>
    )
  }
}

export default Nav
