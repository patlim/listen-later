import React from 'react';
import { connect } from 'react-redux'
import { ListGroup } from "react-bootstrap"

import { selectCategory } from './actions/category'

const NavItem = (props) => {
  const navHandler = () => {
    props.dispatch(selectCategory(props.tag))
  }

  if (props.selectedCategory === props.tag) {
    return <ListGroup.Item variant="primary" onClick = { navHandler }>{props.tag}</ListGroup.Item>
  } else {
    return <ListGroup.Item onClick = { navHandler }>{props.tag}</ListGroup.Item>
  }
}

const mapStateToProps = state => ({ selectedCategory: state.categories.selectedCategory})

export default connect(mapStateToProps)(NavItem)