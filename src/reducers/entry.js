import * as actions from '../actions/entry'

const initialState = [
  {
    id: 1,
    name: "Paper Trails",
    artist: "Darkside",
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Darkside_Psychic_Cover.jpg/220px-Darkside_Psychic_Cover.jpg",
    source: "Youtube",
    date: "25th April 2020",
    categories: ["#electronic","#jazz","#rnb","#rock","#experimental","#latest"],
    link: "/"
  },
  {
    id: 2,
    name: "Dancer",
    artist: "Local Artist",
    img:
      "https://media.pitchfork.com/photos/5b8ff8112139ed4e0509acdd/1:1/w_500/Local%20Artist%20_%20Mood%20Hut%20_%20Dancer%20cover.jpg",
    source: "Soundcloud",
    date: "24th April 2020",
    categories: ["#house", "#hello", "#latest"],
    link: "/"
  },
  {
    id: 3,
    name: "Teuf De Ouf",
    artist: "Scruscru & Jehan",
    img:
      "https://cdn.shopify.com/s/files/1/0306/7317/4665/products/li1_5b42afa0-260c-4fd1-8099-c7148a2e64ee_300x300.jpg?v=1581424806",
    source: "Bandcamp",
    date: "24th April 2020",
    categories: ["#etc","#latest"],
    link: "/"
  },
  {
    id: 4,
    name: "track4",
    artist: "Artist4",
    img:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    source: "Youtube",
    date: "22th April 2020",
    categories: ["#other","#latest"],
    link: "/"
  },
  {
    id: 5,
    name: "track5",
    artist: "Artist5",
    img:
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=355&q=80",
    source: "Bandcamp",
    date: "2nd April 2020",
    categories: ["#etc", "#latest", "#genre"],
    link: "/"
  },
]

const entryReducer = (state = initialState, action) => {
  switch (action.type){
    case actions.REC_ENTRIES:
      return state.filter(entry => entry.categories.includes(action.category))
    case actions.ADD_ENTRY:
      return [...state, action.entry]
    case actions.ADD_ENTRY_CATEGORY:
      return state.map(entry => {
        return entry.id === action.entryId
          ? {...entry, categories: [...entry.categories, action.category]}
          : entry
      })
    default:
      return state
  }
}

export default entryReducer
