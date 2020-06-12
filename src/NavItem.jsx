import React from 'react';
import { connect } from 'react-redux'
import { ListGroup } from "react-bootstrap"

import { selectCategory } from './actions/category'

const NavItem = (props) => {
  const navHandler = () => {
    props.dispatch(selectCategory(props.tag))
  }

  if (props.selectedCategory === props.tag) {
    return <ListGroup.Item style={{ border: 0, color: '#555'}} onClick = { navHandler }><b>{props.tag}</b></ListGroup.Item>
  } else {
    return <ListGroup.Item style={{ border: 0, color: '#555' }} onClick = { navHandler }>{props.tag}</ListGroup.Item>
  }
}

const mapStateToProps = state => ({ selectedCategory: state.categories.selectedCategory})

export default connect(mapStateToProps)(NavItem)