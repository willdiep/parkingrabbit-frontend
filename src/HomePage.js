import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import mapMarkerIcon from './images/map-marker-alt-solid.svg'


class HomePage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='homepage'>
        <div className='homepage__container'>
          <Navbar className='homepage__navbar' />

          <Header className='homepage__header'/>

          <Footer className='homepage__footer' />
        </div>
      </div>
    )
  }
}

export default HomePage
