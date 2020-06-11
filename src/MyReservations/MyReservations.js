import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './MyReservation.scss'

class MyReservation extends Component {
  goBack = () => {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div clasName='MyReservation'>
        <Navbar />
        <article className='MyReservation__Content'>
          <div className='MyReservation__Text'>Stay Put!</div>
          <div className='MyReservation__Text'>
            MyReservation Page will be added for version 2
          </div>
          <div
            className='MyReservation__Text MyReservation__GoBack'
            onClick={this.goBack}
          >
            Go back
          </div>
        </article>
        <Footer />
      </div>
    )
  }
}

export default withRouter(MyReservation)
