import React, { Component } from 'react'
import './Navbar.scss'

class Navbar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <header>
          <nav className='nav'>
            <a className='nav__item nav__logo' href='#'>ParkingRabbit</a>
            <a className='nav__item nav__item--right nav__login ' href='#'>Login</a>
            <a className='nav__item nav__item--right nav__signup' href='#'>Sign Up</a>
          </nav>
        </header>
      </div>
    )
  }
}

export default Navbar
