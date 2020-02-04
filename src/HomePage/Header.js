import React, { Component } from 'react'
import heroimage from '../images/hero-image.png'
import './Header.scss'

class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <main className='header__content'>
          <article className='header__heroimage'>
            <section>
              <img className='header__carrotcar' src={heroimage} alt='hero' />
            </section>

            <section className='header__header'>
              <p className='header__text1'>
                Looking for parking doesn’t <br></br>have to be an easter egg
                hunt!
              </p>
              <p className='header__text2'>
                Choose from hundreds of available parking spaces <br></br>in San
                Francisco and book them in seconds.
              </p>

              <form className='header__CTA'>
                <input
                  type='text'
                  className='header__input'
                  placeholder='Address, Business, or Venue'
                />
                {/* <button className='header__btn'></button> */}
              </form>

              <p className='header__parkingnearme'>Find Parking Near Me</p>
            </section>
          </article>
        </main>
      </div>
    )
  }
}

export default Header