import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import { getEntries } from "./actions/entry"
import EntryItem from "./EntryItem"
import { triggerDrawer } from "./actions/linkDrawer"

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
    this.props.dispatch(getEntries())
  }

  render() {
    let filteredEntryList = []
    if (this.props.selectedCategory === "all") {
      filteredEntryList = this.props.entryList
    } else {
      filteredEntryList = this.props.entryList.filter(entry => entry.categories.includes(this.props.selectedCategory))
    }
      return (
      <EntryListContainer className="col">
        <thead>
          <tr>
            <EntryListHeader>{this.props.selectedCategory}</EntryListHeader>
            <EntryListHeader>Date Added</EntryListHeader>
            {/* <button onClick={() => this.props.dispatch(triggerDrawer(true))}>Add Link</button> */}
          </tr>
        </thead>
        <tbody>
          { (filteredEntryList.length === 0)
            ? <tr>No entries in this category</tr>
            : filteredEntryList.map((entry) => (
              <EntryRow key={entry.id}>
                <EntryItem
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

const mapStateToProps = state => {
  return {
    entryList: state.entries,
    selectedCategory: state.categories.selectedCategory
  }
}

export default connect(mapStateToProps)(EntryList)
