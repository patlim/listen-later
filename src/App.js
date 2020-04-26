import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Header from './Header'
import Nav from './Nav'
import EntryList from './EntryList';

function App() {
  return (
    <>
      <Header />
      <div className="row">
        <Route path="/" component={Nav} />
        <EntryList />
      </div>
    </>
  );
}

export default App;
