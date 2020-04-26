import React, { Component } from "react"
import styled from "styled-components"

import Tag from "./Tag"

class Entry extends Component {
  render() {
    const Details = styled.td`
      width: 30%;
      border-bottom: 0.5px solid lightgray;
      padding: 15px;
      height: 100%;
    `
    const DateTags = styled.td`
      width: 70%;
      border-bottom: 0.5px solid lightgray;
      padding: 15px;
      height: 100%;
    `
    const Art = styled.img`
      width: 100px;
      float: left;
      height: auto;
    `
    const DetailInfo = styled.div`
      overflow:hidden;
      padding-left: 15px;
    `
    const Name = styled.p`
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 0px;
    `
    const Artist = styled.p`
      font-size: 15px;
      margin-bottom: 0px;
    `
    const Length = styled.p`
      font-size: 15px;
      margin-bottom: 0;
    `
    const Source = styled.p`
      font-size: 15px;
      color: grey;
      margin: 0;
    `
    const Date = styled.p`
      font-size: 15px;
    `
    const DateContainer = styled.div`
      height: 40%;
      display: flex;
      flex-direction: row;
    `

    const TagContainer = styled.div`
      height: 60%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    `
    // const IconContainer = styled.div`
    //   align-self: flex-end;
    // `

    return (
      <>
        <Details>
          <Art src={this.props.img} alt="album art" />
          <DetailInfo>
            <Name>{this.props.name}</Name>
            <Artist>{this.props.artist}</Artist>
            <Length>{this.props.length}</Length>
            <Source>Source: {this.props.source}</Source>
          </DetailInfo>
        </Details>
        <DateTags>
          <DateContainer>
            <Date>{this.props.date}</Date>
            {/* <IconContainer>
              <i class="fas fa-link"></i>
              <i class="fas fa-minus"></i>
            </IconContainer> */}
          </DateContainer>
          <TagContainer>
            {this.props.tags.map((t) => (
              <Tag tag={t.tag} />
            ))}
          </TagContainer>
        </DateTags>
      </>
    )
  }
}

export default Entry
