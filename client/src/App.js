import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Header from './Header'
import Nav from './Nav'
import EntryList from './EntryList';
function App() {
  return (
    <>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <Route path="/" component={Nav} />
        <EntryList />
      </div>
    </>
  );
}

export default App;
