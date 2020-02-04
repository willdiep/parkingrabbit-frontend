import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
// import logo from './logo.svg';
import HomePage from './HomePage/HomePage'
import Login from './LoginSignUp/Login'
import './App.scss';

function App() {
  return (
    <div className="app">
      {/* <main className="grid-container"></main> */}
      <Router>
      <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login'  component={Login} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
