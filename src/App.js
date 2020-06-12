import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import LinkDrawer from './LinkDrawer'
import Nav from './Nav'
import EntryList from './EntryList';
function App() {
  return (
    <>
      <LinkDrawer />
      <div style={{ margin: '1em' }} className="row">
        <Route path="/" component={Nav} />
        <EntryList />
      </div>
    </>
  );
}

export default App;
