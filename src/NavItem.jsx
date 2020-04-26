import React from 'react';
import styled from 'styled-components'

const NavItem = (props) => {
  const NavItem = styled.li`
  padding: 15px;
  `
  return ( 
    <>
      <NavItem>{props.tag}</NavItem>
    </>
   );
}
 
export default NavItem;