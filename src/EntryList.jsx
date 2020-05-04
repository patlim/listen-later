import React, { Component } from "react"
import { connect } from 'react-redux'
import styled from "styled-components"

import { getEntries } from './actions/entry'
import Entry from "./Entry"

class EntryList extends Component {
  componentDidMount() {
    this.props.dispatch(getEntries('#latest'))
  }
  render() {
    const EntryListContainer = styled.table`
      float: right;
      width: 80%;
      overflow-y: scroll;
    `
    const EntryListHeader = styled.th`
      border-bottom: .5px solid lightgray;
      padding: 15px;
      text-align:"left";
    `
    const EntryRow = styled.tr`
      height: 100px;
    `

    return (
      <EntryListContainer className="col">
        <thead>
          <tr>
            <EntryListHeader >#latest</EntryListHeader>
            <EntryListHeader >Date Added</EntryListHeader>
          </tr>
        </thead>
        <tbody>
          {this.props.entryList.map((entry) => (
            <EntryRow key={entry.id}>
              <Entry
                id={entry.id}
                img={entry.img}
                name={entry.name}
                artist={entry.artist}
                source={entry.source}
                date={entry.date}
                categories={entry.categories}
                linke={entry.link}
              />
            </EntryRow>
          ))}
        </tbody>
      </EntryListContainer>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.entries)
  return {
    entryList: state.entries
  }
}

export default connect(mapStateToProps)(EntryList)
