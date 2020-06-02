import React, { Component } from 'react'
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
// import Navbar from './Navbar/Navbar'
// import logo from './logo.svg';
import HomePage from './HomePage/HomePage'
import Login from './LoginSignup/Login'
import Signup from './LoginSignup/Signup'
import MapPage from './MapPage/MapPage'
import CheckoutPage from './CheckoutPage/CheckoutPage'
import LoginSignup from './LoginSignup/LoginSignup'
import './App.scss'

class App extends Component {
  constructor() {
    super()

    this.state = {
      // DEFAULT COORDINATES
      userLat: 37.763286,
      userLng: -122.435791,
      // userLocationInput: '',
      // listingCollection: {}
      user: null,
      userLocationText: '',
      loginError: false,
    }
  }

  handleLogin = (loginInfo) => {
    fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        auth: loginInfo,
      }),
    })
      .then((response) => response.json())
      .then((userInfo) => {
        // console.log(userInfo.error)

        if (userInfo.error) {
          throw userInfo.error
        } else {
          // console.log(userInfo.user)
          localStorage.setItem('jwt', userInfo.token)
          this.setState(
            {
              user: userInfo.user,
              // loginError: true
            },
            () => {
              this.props.history.push('/mappage')
            }
          )
        }
      })
      .catch((data) => {
        // console.log(data)
        this.setState({
          loginError: true,
        })
      })
  }

  handleSignUp = (signUpInfo) => {
    // console.log(signUpInfo)

    // CHECK IF ALL INPUT FIELDS ARE FILLED
    for (let key in signUpInfo) {
      // console.log(!signUpInfo[key].length)

      if (!signUpInfo[key].length) {
        this.setState({
          loginError: true,
        })
        break
      } else {
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            user: signUpInfo,
          }),
        })
          .then((response) => response.json())
          .then((userInfo) => {
            // if (userInfo.error) {
            //   throw userInfo.error
            // } else {
            // console.log(userInfo)
            localStorage.setItem('jwt', userInfo.token)
            this.setState({ user: userInfo.user }, () => {
              this.props.history.push('/mappage')
            })
            // }
          })
          .catch((data) => {
            // console.log(data)
            this.setState({
              loginError: true,
            })
          })
      }
    }
  }

  // handleSetLocationInput = e => {
  //   // console.log(e)
  //   this.setState({
  //     userLocationInput: e.target.value
  //   })
  // }

  // handleSubmitListingCollection = e => {
  // e.preventDefault()
  // fetch('http://localhost:3000/listings')
  //   .then(resp => resp.json())
  //   .then(data => {
  //     console.log(data)
  //     this.setState({
  //       listingCollection: data
  //     })
  //   })
  //   this.props.history.push('/mappage')
  // }

  handleSetLatLng = (coordinatesArr) => {
    // console.log('App: from handleSetLat')
    // console.log(lat)
    this.setState(
      {
        userLat: coordinatesArr[0],
        userLng: coordinatesArr[1],
      },
      () => {
        this.props.history.push('/mappage')
      }
    )

    // MATT's ALTERNATIVE
    // Promise.resolve(this.setState({
    //   userLat: coordinatesArr[0],
    //   userLng: coordinatesArr[1]
    // })).then((setStateResult) => {
    //   console.log(setStateResult)
    //   this.props.history.push('/mappage')
    // })
  }

  // handleSetLng = lng => {
  //   // console.log('App: from handleSetLng')
  //   // co  nsole.log(lng)
  //   this.setState({
  //     userLng: lng
  //   })
  //   this.props.history.push('/mappage')
  // }

  handleSetLocationText = (locationName) => {
    this.setState({
      userLocationText: locationName,
    })
  }

  render() {
    // console.log(this.props.history)
    return (
      <div className='app'>
        {/* <main className="grid-container"></main> */}
        {/* <Router> */}
        {/* <Navbar /> */}
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <HomePage
                {...props}
                // stateLocation={this.state.userLocationInput}
                handleSetLatLng={this.handleSetLatLng}
                handleSetLocationText={this.handleSetLocationText}
                user={this.state.user}

                // setUserLocationInput={this.handleSetLocationInput}
                // setSubmitListingCollection={
                // this.handleSubmitListingCollection
                // }
              />
            )}
          />
          <Route
            exact
            path='/login'
            render={(props) => (
              <LoginSignup>
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  loginError={this.state.loginError}
                />
              </LoginSignup>
            )}
          />
          
          <Route
            exact
            path='/signup'
            render={(props) => (
              <LoginSignup>
                <Signup
                  {...props}
                  handleSignUp={this.handleSignUp}
                  loginError={this.state.loginError}
                />
              </LoginSignup>
            )}
          />

          <Route
            exact
            path='/mappage'
            render={(props) => (
              <MapPage
                {...props}
                setLng={this.state.userLng}
                setLat={this.state.userLat}
                handleSetLatLng={this.handleSetLatLng}
                handleSetLocationText={this.handleSetLocationText}
                parkingSpotsNear={this.state.userLocationText}
                user={this.state.user}
              />
            )}
          />

          {/* TEMPORARY CHECKOUTPAGE ROUTE */}
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
        {/* </Router> */}
      </div>
    )
  }
}

export default withRouter(App)
