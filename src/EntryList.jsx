import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import { getEntries } from "./actions/entry"
import Entry from "./Entry"

const EntryListContainer = styled.table`
  float: right;
  width: 80%;
  overflow-y: scroll;
`
const EntryListHeader = styled.th`
  border-bottom: 0.5px solid lightgray;
  padding: 15px;
  text-align: "left";
`
const EntryRow = styled.tr`
  height: 100px;
`

class EntryList extends Component {
  componentDidMount() {
    this.props.dispatch(getEntries("#latest"))
  }
  render() {
    return (
      <EntryListContainer className="col">
        <thead>
          <tr>
            <EntryListHeader>{this.props.selectedCategory}</EntryListHeader>
            <EntryListHeader>Date Added</EntryListHeader>
          </tr>
        </thead>
        <tbody>
          { (this.props.entryList.length === 0)
            ? <tr>No entries in this category</tr>
            : this.props.entryList.map((entry) => (
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
            ))
          }
        </tbody>
      </EntryListContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    entryList: state.entries.filter(entry => entry.categories.includes(state.categories.selectedCategory)),
    selectedCategory: state.categories.selectedCategory
  }
}

export default connect(mapStateToProps)(EntryList)
