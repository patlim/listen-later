import React from 'react';
import styled from 'styled-components'

const Header = () => {
  const Header = styled.header`
  color: #000;
  font-family: Avenir;
  font-size: 70px;
  font-style: oblique;
  font-weight: 900;
  padding: 10px 0 0 20px;`

  return ( 
    <Header>
      LISTEN LATER
    </Header>
   );
}
 
export default Header;