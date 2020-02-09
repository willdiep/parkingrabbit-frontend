import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
// import Navbar from './Navbar/Navbar'
// import logo from './logo.svg';
import HomePage from './HomePage/HomePage'
import Login from './LoginSignUp/Login'
import Signup from './LoginSignUp/Signup'
import MapPage from './MapPage/MapPage'
import './App.scss'

class App extends Component {
  constructor() {
    super()

    this.state = {
      userLocationInput: '',
      listingCollection: {}
    }
  }

  handleSetLocationInput = e => {
    // console.log(e)
    this.setState({
      userLocationInput: e.target.value
    })
  }

  handleSubmitListingCollection = e => {
    e.preventDefault()
    fetch('http://localhost:3000/listings')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({
          listingCollection: data
        })
      })
      this.props.history.push('/mappage')
  }

  render() {
    return (
      <div className='app'>
        {/* <main className="grid-container"></main> */}
        {/* <Router> */}
          {/* <Navbar /> */}
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <HomePage
                  {...props}
                  stateLocation={this.state.userLocationInput}
                  setUserLocationInput={this.handleSetLocationInput}
                  setSubmitListingCollection={
                    this.handleSubmitListingCollection
                  }
                />
              )}
            />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/mappage' component={MapPage} />
          </Switch>
        {/* </Router> */}
      </div>
    )
  }
}

export default withRouter(App)
