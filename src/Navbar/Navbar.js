import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className={
            this.props.homePage ? 'nav nav__navHomePagePosition' : 'nav'
          }
        >
          <Link
            exact
            to='/'
            className={
              this.props.homePage
                ? 'nav__item nav__logo nav__HomePageLogoColor'
                : 'nav__item nav__logo nav__MapPageLogoColor'
            }
          >
            <strong>Parking</strong>Rabbit
          </Link>
          {/* <a className='nav__item nav__logo' href='#'><strong>Parking</strong>Rabbit</a> */}

          <Link
            exact
            to='/login'
            className='nav__item nav__item--right nav__login'
          >
            Login
          </Link>

          <Link
            exact
            to='/signup'
            className='nav__item nav__item--right nav__signup'
          >
            Sign Up
          </Link>

          {/* <a className='nav__item nav__item--right nav__login' 
            href='#'>Login</a> */}

          {/* <a className='nav__item nav__item--right nav__signup' href='#'>Sign Up</a> */}
        </nav>
      </div>
    )
  }
}

export default Navbar
