import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import Tag from "./Tag"

class Entry extends Component {
  state = {
    newTag: "",
  }

  changeHandler = (evt) => this.setState({ newTag: evt.target.value })

  enterHandler = (evt) => {
    if (evt.keyCode === 13) {
      console.log("entered: ", this.state.newTag)
    }
    this.setState({ newTag: "" })
  }

  render() {
    const Details = styled.td`
      width: 30%;
      border-bottom: 0.5px solid lightgray;
      padding: 15px;
      height: 100%;
    `
    const DateTags = styled.td`
      width: 60%;
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
      overflow: hidden;
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
    const InputTag = styled.input`
      position: relative;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 25px;
      width: 100px;
      border-radius: 100px;
      background-color: lightgrey;
      margin: 0 10px 10px 0;
      border: 0;
      font-size: 15px;
    `
    const IconLink = styled.a`
      border-bottom: 2px solid white;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      padding: 0 5px 0 5px;

    `
    const IconContainer = styled.div`
    display: table;
    width: 10%;
    height: 100%;
    background-color: #d7defb;
    `

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
          </DateContainer>
          <TagContainer>
            {this.props.categories.map((tag) => (
              <Tag tag={tag} />
            ))}
            <InputTag
              type="text"
              placeholder="add tag"
              onChange={this.changeHandler}
              onKeyUp={this.enterHandler}
            />
          </TagContainer>
        </DateTags>
        <IconContainer>
          <IconLink href={this.props.link}>
            <i className="far fa-play-circle fa-1x" />
          </IconLink>
        </IconContainer>
      </>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(undefined, mapDispatchToProps)(Entry)
