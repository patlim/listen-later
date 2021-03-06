import React, { Component } from "react"
import styled from "styled-components"

const TagWrapper = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 25px;
  min-width: 100px;
  border-radius: 100px;
  background-color: #d7defb;
  margin: 0 10px 10px 0;
`
const TagText = styled.span`
  display: inline-block;
  color: #2661d4;
  font-family: Helvetica;
  font-size: 15px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
`

class Tag extends Component {
  render() {
    return (
      <TagWrapper>
        <TagText>{this.props.tag}</TagText>
      </TagWrapper>
    )
  }
}

export default Tag
