import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import heroimage from './images/hero-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import mapMarkerIcon from './images/map-marker-alt-solid.svg'
import './HomePage.scss'

class HomePage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='homepage'>
        <div className='homepage__container'>
          <Navbar className='homepage__navbar' />

          <main className='homepage__content'>
            <article className='homepage__heroimage'>
              <section>
                <img
                  className='homepage__carrotcar'
                  src={heroimage}
                  alt='hero'
                />
              </section>

              <section className='homepage__header'>
                <p className='homepage__text1'>
                  Looking for parking doesn’t <br></br>have to be an easter egg
                  hunt!
                </p>
                <p className='homepage__text2'>
                  Choose from hundreds of available parking spaces <br></br>in
                  San Francisco and book them in seconds.
                </p>

                <form className='homepage__CTA'>
                  <input
                    type='text'
                    className='homepage__input'
                    placeholder='Address, Business, or Venue'
                  />
                  {/* <button className='homepage__btn'></button> */}
                </form>

                <p className='homepage__parkingnearme'>Find Parking Near Me</p>

              </section>
            </article>
          </main>

          <Footer className='homepage__footer' />
        </div>
      </div>
    )
  }
}

export default HomePage
