import React from 'react'
import './CheckoutFooter.scss'

const CheckoutFooter = () => {
  return (
    <footer className='CheckoutFooter'>
      {/* <div className='CheckoutFooter__TwoColumns'> */}
      <section className='CheckoutFooter__Left'>
        <ul  className='CheckoutFooter__List'>
          <li className='CheckoutFooter__ListItem'>ParkingRabbit &copy;</li>
          <li className='CheckoutFooter__ListItem'>(888) 958-0569 Daily, 4am – 10pm</li>
        </ul>
      </section>

      <section className='CheckoutFooter__Right'>
        <ul className='CheckoutFooter__List'>
          <li className='CheckoutFooter__ListItem'>How it works</li>
          <li className='CheckoutFooter__ListItem'>Contact</li>
          <li className='CheckoutFooter__ListItem'>Terms &amp; Conditions</li>
        </ul>
      </section>
      {/* </div> */}
    </footer>
  )
}

export default CheckoutFooter
