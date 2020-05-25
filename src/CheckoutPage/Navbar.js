import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'


class Navbar extends Component {

  render() {
    return (
      <div className='checkout-nav'>
         <Link exact to='/'  className='checkout-nav__item checkout-nav__logo'><strong>Parking</strong>Rabbit</Link>

        <h3 className='checkout-nav__reservations checkout-nav__item--right'>Reservations</h3>
        <h3 className='checkout-nav__myprofile checkout-nav__item--right'>My Profile</h3>
      </div>
    )
  }
}

export default Navbar