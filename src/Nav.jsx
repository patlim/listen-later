import React, { Component } from "react"
import { connect } from "react-redux"
import { ListGroup } from "react-bootstrap"
import styled from "styled-components"

import { getCategories } from "./actions/category"
import NavItem from "./NavItem"

const TitleHeader = styled.header`
  color: #000;
  font-family: 'Avenir';
  font-size: 45px;
  font-style: oblique;
  font-weight: 900;
`

class Nav extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories())
  }

  render() {
    return (
      <>
        <ListGroup style={{ maxWidth: "15%" }} className="col" variant="flush">
          <TitleHeader>LISTEN<br/>LATER</TitleHeader>
          {this.props.taglist.map((t) => (
            <NavItem key={t.id} tag={t.tag} />
          ))}
        </ListGroup>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    taglist: state.categories.taglist,
  }
}

export default connect(mapStateToProps)(Nav)
