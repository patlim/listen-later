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
  padding: 15px 15px 5px 15px;
  text-align: "left";
`
const ButtonHeader = styled.th`
  border-bottom: 0.5px solid lightgray;
  text-align: "right";
  width: 5vh;
`
const EntryRow = styled.tr`
  height: 100px;
`
const LinkButton = styled.button`
  height: 25px;
  min-width: 100px;
  border-radius: 100px;
  background-color: #2661d4;
  margin: 0;
  padding: 0;
  border: none;
`
const ButtonText = styled.span`
  display: inline-block;
  color: white;
  font-family: Helvetica;
  font-size: 15px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
`

class EntryList extends Component {
  componentDidMount() {
    this.props.dispatch(getEntries())
  }

  render() {
    let filteredEntryList = []
    if (this.props.selectedCategory === "All") {
      filteredEntryList = this.props.entryList
    } else {
      filteredEntryList = this.props.entryList.filter((entry) =>
        entry.categories.includes(this.props.selectedCategory)
      )
    }
    return (
      <>
        <EntryListContainer className="col">
          <thead style={{ display: "block", width: '100%' }}>
            <tr>
              <EntryListHeader style={{ width: '30vw' }}>{this.props.selectedCategory}</EntryListHeader>
              <EntryListHeader style={{ width: '45vw'}}>Date Added</EntryListHeader>
              <ButtonHeader>
                <LinkButton
                  onClick={() => this.props.dispatch(triggerDrawer(true))}
                >
                  <ButtonText>+ Add Link</ButtonText>
                </LinkButton>
              </ButtonHeader>
            </tr>
          </thead>
          <tbody
            style={{
              display: "block",
              overflow: "hidden",
              overflowY: "auto",
              height: '88vh',
              width: '100%'
            }}
          >
            {filteredEntryList.length === 0 ? (
              <tr>No entries in this category</tr>
            ) : (
              filteredEntryList.map((entry) => (
                <EntryRow key={entry.id}>
                  <EntryItem
                    id={entry.id}
                    img={entry.img}
                    name={entry.name}
                    artist={entry.artist}
                    source={entry.source}
                    date={entry.date}
                    categories={entry.categories}
                    link={entry.link}
                  />
                </EntryRow>
              ))
            )}
          </tbody>
        </EntryListContainer>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    entryList: [].concat(state.entries).reverse(),
    selectedCategory: state.categories.selectedCategory,
  }
}

export default connect(mapStateToProps)(EntryList)
