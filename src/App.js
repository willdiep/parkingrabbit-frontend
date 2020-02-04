import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import HomePage from './HomePage/HomePage'
import './App.scss';

function App() {
  return (
    <div className="app">
      {/* <main className="grid-container"></main> */}
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
