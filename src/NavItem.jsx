import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getEntries } from './actions/entry'
 
const NavListItem = styled.li`
  padding: 15px;
  `
  
const NavItem = (props) => {
  const navHandler = () => {
    props.dispatch(getEntries(props.tag))
  }

  return ( 
    <>
      <NavListItem onClick = { navHandler }>{props.tag}</NavListItem>
    </>
   );
}
 
export default connect()(NavItem)