import React from 'react'
import LineBreak from '../GLOBAL/LineBreak'
import appleAppBadge from '../assets/images/apple-app-badge.svg'
import googleAppBadge from '../assets/images/google-play-badge.png'
import iphoneMockup from '../assets/images/iphone-10-mockup.png'
import './MobileApp.scss'

const MobileApp = () => {
  return (
    <article className='mobile-app'>
      <section className='mobile-app__content'>
        <h4 className='mobile-app__heading'>Get the app!</h4>
        <h5 className='mobile-app__subheading'>
          Enter your phone number below and you will receive a one-time text
          message to download the free ParkingRabbit app.
        </h5>

        <h6 className='mobile-app__phone-num'>Enter your phone number</h6>

        <input
          className='mobile-app__input'
          type='text'
          placeholder='415-123-3456'
        />
        <button
          className='mobile-app__submit-btn'
          onClick={() => console.log('Input submit button clicked')}
        >
          Text me the app
        </button>

        <LineBreak />

        <sub className='mobile-app__terms'>
          By entering your phone number and clicking above, you consent and
          authorize ParkingRabbit to send you a one-time text message through an
          automatic telephone dialing system. Message & data rates may apply.
        </sub>

        <div className='mobile-app__links'>
          <img className='mobile-app__apple-badge' src={appleAppBadge} alt='apple download mobile app link' />
          <img className='mobile-app__google-badge'src={googleAppBadge} alt='google download mobile app link' />
        </div>
      </section>

      <section className='mobile-app__phone-img'>
        <img className='mobile-app__iphone-mockup' src={iphoneMockup} alt='iphone mockup of parking rabbit' />
      </section>

    </article>
  )
}

export default MobileApp
