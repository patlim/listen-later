import React, { Component } from "react"
import { connect } from 'react-redux'
import styled from "styled-components"

import { receiveTags } from "./actions/index"
import NavItem from "./NavItem"

class Nav extends Component {
  constructor (props) {
    super(props)
    this.props.dispatch(receiveTags())
  }
  // state = {
  //   taglist: [
  //     { id: 1, tag: "#house" },
  //     { id: 2, tag: "#jazz" },
  //     { id: 3, tag: "#rnb" },
  //     { id: 4, tag: "#hiphop" },
  //     { id: 5, tag: "#soul" },
  //   ],
  // }

  render() {
    console.log(this.state.taglist);
    
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
        {/* {this.state.taglist.map((t) => (
          <NavItem key={t.id} tag={t.tag} />
        ))} */}
        <NavItem tag="more" style={{alignSelf: 'flex-end'}} />
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
