import React, { Component } from "react"
import styled from "styled-components"

import Entry from "./Entry"

class EntryList extends Component {
  state = {
    entryArr: [
      {
        id: 1,
        name: "Paper Trails",
        artist: "Darkside",
        img:
          "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Darkside_Psychic_Cover.jpg/220px-Darkside_Psychic_Cover.jpg",
        length: "4:50",
        date: "25th April 2020",
        taglist: [
          { id: 1, tag: "#house" },
          { id: 2, tag: "#jazz" },
          { id: 3, tag: "#rnb" },
        ],
      },
      {
        id: 2,
        name: "Dancer",
        artist: "Local Artist",
        img:
          "https://media.pitchfork.com/photos/5b8ff8112139ed4e0509acdd/1:1/w_500/Local%20Artist%20_%20Mood%20Hut%20_%20Dancer%20cover.jpg",
        length: "6:26",
        date: "24th April 2020",
        taglist: [
          { id: 1, tag: "#house" },
          { id: 2, tag: "#hello" },
          { id: 3, tag: "#tag" },
        ],
      },
      {
        id: 3,
        name: "Teuf De Ouf",
        artist: "Scruscru & Jehan",
        img:
          "https://cdn.shopify.com/s/files/1/0306/7317/4665/products/li1_5b42afa0-260c-4fd1-8099-c7148a2e64ee_300x300.jpg?v=1581424806",
        length: "6:26",
        date: "24th April 2020",
        taglist: [
          { id: 1, tag: "#etc" },
          { id: 2, tag: "#thing" },
        ],
      },
    ],
  }

  render() {
    const EntryListContainer = styled.table`
      float: right;
    `
    const EntryListHeader = styled.th`
      height: 19px;
      width: 99px;
      color: #000;
      font-family: Helvetica;
      font-size: 25px;
      font-weight: 700;
      line-height: 25px;
    `

    return (
      <EntryListContainer>
        <thead>
          <tr>
            <EntryListHeader>#latest</EntryListHeader>
            <EntryListHeader>Date Added</EntryListHeader>
          </tr>
        </thead>
        <tbody>
          {this.state.entryArr.map((entry) => (
            <tr key={entry.id}>
              <Entry
                img={entry.img}
                name={entry.name}
                artist={entry.artist}
                length={entry.length}
                date={entry.date}
                tags={entry.taglist}
              />
            </tr>
          ))}
        </tbody>
      </EntryListContainer>
    )
  }
}

export default EntryList
