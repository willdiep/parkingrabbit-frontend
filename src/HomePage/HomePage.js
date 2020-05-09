import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
// import Footer from './Footer'
import Header from './Header'
import Process from './Process'
import MobileApp from './MobileApp'
import heroimage from '../images/hero-image.png'
import Footer from './Footer'
import './HomePage.scss'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import mapMarkerIcon from './images/map-marker-alt-solid.svg'

class HomePage extends Component {
  render() {
    return (
      <div className='homepage'>
        <div className='homepage__container'>
          <header>
            <Navbar className='homepage__navbar' homePage={true} />

            <article className='homepage__banner'>
              <section className='homepage__heroimage'>
                <figure className='homepage__figure'>
                  <img
                    className='homepage__carrotcar'
                    src={heroimage}
                    alt='hero'
                  />
                </figure>

                <Header
                  className='homepage__header'
                  // stateLocation={this.props.stateLocation}
                  handleSetLatLng={this.props.handleSetLatLng}
                  // handleSetLng={this.props.handleSetLng}
                  // setUserLocationInput={this.props.setUserLocationInput}
                  // setSubmitListingCollection={this.props.setSubmitListingCollection}
                />
              </section>
            </article>
          </header>

          <Process className='homepage__process' />

          <MobileApp />

          <Footer className='homepage__footer' />
        </div>
      </div>
    )
  }
}

export default HomePage
