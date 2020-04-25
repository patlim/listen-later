import React, { Component } from "react"
import styled from "styled-components"

import Tag from "./Tag"

class Entry extends Component {
  render() {
    const Details = styled.td`
      height: 150;
    `
    const DateTags = styled.td`
      height: 150;
    `
    const Art = styled.img`
      width: 150px;
      height: 150px;
    `
    const Name = styled.p`
      height: 21px;
      width: 240px;
      color: #000;
      font-family: Helvetica;
      font-size: 20px;
      font-weight: 700;
      line-height: 20px;
    `
    const Artist = styled.p`
      height: 57px;
      width: 241px;
      color: #000;
      font-family: Roboto;
      font-size: 20px;
      line-height: 26px;
    `
    const Length = styled.p`
      height: 35px;
      width: 241px;
      color: #000;
      font-family: Roboto;
      font-size: 20px;
      line-height: 26px;
    `
    const Date = styled.p`
      height: 35px;
      width: 149px;
      color: #000;
      font-family: Roboto;
      font-size: 20px;
      line-height: 26px;
      text-align: center;
    `

    return (
      <>
        <Details>
          <Art src={this.props.img} />
          <Name>{this.props.name}</Name>
          <Artist>{this.props.artist}</Artist>
          <Length>{this.props.length}</Length>
        </Details>
        <DateTags>
          <Date>{this.props.date}</Date>
          {this.props.tags.map((t) => (
            <Tag tag={t.tag} />
          ))}
        </DateTags>
      </>
    )
  }
}

export default Entry
