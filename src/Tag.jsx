import React, { Component } from 'react';
import styled from 'styled-components'

class Tag extends Component {
  render() {
    const Tag = styled.div`
      height: 39px;
      width: 124px;
      border-radius: 100px;
      background-color: #D7DEFB;`
    const TagText = styled.p`
      height: 20px;
      width: 124px;
      color: #2661D4;
      font-family: Helvetica;
      font-size: 22px;
      font-weight: 700;
      line-height: 22px;
      text-align: center;`

    return ( 
      <Tag>
        <TagText>{this.props.tag}</TagText>
      </Tag>
     );
  }
}
 
export default Tag;
