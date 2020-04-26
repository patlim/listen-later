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
        source: "Youtube",
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
        source: "Soundcloud",
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
        source: "Bandcamp",
        date: "24th April 2020",
        taglist: [
          { id: 1, tag: "#etc" },
          { id: 2, tag: "#thing" },
        ],
      },
      {
        id: 4,
        name: "track4",
        artist: "Artist4",
        img:
          "http://placeimg.com/310/310/any",
        length: "1:34",
        source: "Youtube",
        date: "22th April 2020",
        taglist: [
          { id: 1, tag: "#other" },
          { id: 2, tag: "#thing" },
        ],
      },
      {
        id: 5,
        name: "track5",
        artist: "Artist5",
        img:
          "https://placebear.com/300/300",
        length: "3:56",
        source: "Bandcamp",
        date: "2nd April 2020",
        taglist: [
          { id: 1, tag: "#etc" },
          { id: 2, tag: "#thing" },
          { id: 3, tag: "#genre" },
        ],
      },
    ],
  }

  render() {
    const EntryListContainer = styled.table`
      float: right;
      width: 80%;
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
          {this.state.entryArr.map((entry) => (
            <EntryRow key={entry.id}>
              <Entry
                img={entry.img}
                name={entry.name}
                artist={entry.artist}
                length={entry.length}
                source={entry.source}
                date={entry.date}
                tags={entry.taglist}
              />
            </EntryRow>
          ))}
        </tbody>
      </EntryListContainer>
    )
  }
}

export default EntryList
