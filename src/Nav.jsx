import React, { Component } from "react"
import { connect } from "react-redux"
import { ListGroup } from "react-bootstrap"
import styled from "styled-components"

import { getCategories } from "./actions/category"
import NavItem from "./NavItem"

const NavHeader = styled.p`
  font-weight: 700;
  padding: 15px;
  border-bottom: 0.5px solid lightgrey;
  margin-bottom: 0px;
`

class Nav extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories())
  }

  render() {
    return (
      <ListGroup style={{ maxWidth: '15%' }} variant="flush" className="col">
        <NavHeader>Categories</NavHeader>
          {this.props.taglist.map((t) => (
            <NavItem key={t.id} tag={t.tag} />
          ))}
      </ListGroup>
    )
  }
}

function mapStateToProps(state) {
  return {
    taglist: state.categories.taglist,
  }
}

export default connect(mapStateToProps)(Nav)
