import React, { Component } from 'react'
import './Footer.scss'
import facebookIcon from '../assets/images/facebook-icon.svg'
import twitterIcon from '../assets/images/twitter-icon.svg'
import mailIcon from '../assets/images/mail-icon.svg'
import instagramIcon from '../assets/images/instagram-icon.svg'

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <article className='footer__container'>
          <section className='footer__content'>
            <div className='foot__'>
              <ul>
                <strong><p className='footer__heading'>Company</p></strong>
                <li className='footer__link'>About Us</li>
                <li className='footer__link'>Press</li>
                <li className='footer__link'>Careers</li>
                <li className='footer__link'>Blog</li>
                <li className='footer__link'>Reviews</li>
                <li className='footer__link'>Contact Us</li>
              </ul>
            </div>
            <div className='foot__'>
              <ul>
              <strong><p className='footer__heading footer__hidden-text'>Company</p></strong>
                <li className='footer__link'>FAQs</li>
                <li className='footer__link'>Terms &amp; Conditions</li>
                <li className='footer__link'>Privacy Policy</li>
                <li className='footer__link'>Calfornia Privacy Rights</li>
              </ul>
            </div>
            <div className='foot__'>
              <ul>
              <strong><p className='footer__heading'>Sell Parking</p></strong>
                <li className='footer__link'>Operators</li>
                <li className='footer__link'>Property Managers</li>
                <li className='footer__link'>Spot Owners</li>
              </ul>
            </div>
            <div className='foot__'>
              <ul>
              <strong><p className='footer__heading'>Solutions</p></strong>
                <li className='footer__link'>Development Platform</li>
                <li className='footer__link'>ParkingRabbit for Business</li>
                <li className='footer__link'>ParkingRabbit for Fleets</li>
                <li className='footer__link'>Event Parking Partnerships</li>
              </ul>
            </div>
          </section>
          <section className='footer__socialmedia'>
            <div>
              <img className='footer__icon' src={facebookIcon} alt='facebook icon link' />
            </div>
            <div>
            <img className='footer__icon' src={twitterIcon} alt='twitter icon link' />
            </div>
            <div>
              <img className='footer__icon' src={mailIcon} alt='mail icon link' />
            </div>
            <div>
            <img className='footer__icon' src={instagramIcon} alt='instagram icon link' />
            </div>
          </section>
        </article>
      </footer>
    )
  }
}

export default Footer
