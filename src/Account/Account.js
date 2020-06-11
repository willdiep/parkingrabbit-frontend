import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Account.scss'

class Account extends Component {
  goBack = () => {
    this.props.history.go(-1)
  }

  render() {
    return (
      <div clasName='Account'>
        <Navbar />
        <article className='Account__Content'>
          <div className='Account__Text'>Stay Put!</div>
          <div className='Account__Text'>
            Account Page will be added for version 2
          </div>
          <div className='Account__Text Account__GoBack' onClick={this.goBack}>
            Go back
          </div>
        </article>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Account)
