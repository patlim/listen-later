import React, { Component } from "react"
import { connect } from 'react-redux'
import styled from "styled-components"

import { getCategories } from "./actions/category"
import NavItem from "./NavItem"

class Nav extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories())
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
        {this.props.taglist.map((t) => (
          <NavItem key={t.id} tag={t.tag} />
        ))}
      </NavContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    taglist: state.categories
  }
}

export default connect(mapStateToProps)(Nav)
