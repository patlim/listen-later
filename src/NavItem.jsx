import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getEntries } from './actions/entry'
 
const NavItem = (props) => {
  const NavItem = styled.li`
  padding: 15px;
  `
  
  const navHandler = () => {
    props.dispatch(getEntries(props.tag))
  }

  return ( 
    <>
      <NavItem onClick = { navHandler }>{props.tag}</NavItem>
    </>
   );
}
 
export default connect()(NavItem)