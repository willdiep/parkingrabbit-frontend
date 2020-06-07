import React from 'react'
import './CheckoutFooter.scss'

const CheckoutFooter = () => {
  return (
    <footer className='CheckoutFooter'>
      {/* <div className='CheckoutFooter__TwoColumns'> */}
        <section className='CheckoutFooter__Left'>
          <span>ParkingRabbit &copy;</span>
          <span>(888) 958-0569 Daily, 4am – 10pm</span>
        </section>

        <section className='CheckoutFooter__Right'>
          <span>How it works</span>
          <span>Contact</span>
          <span>Terms &amp; Conditions</span>
        </section>
      {/* </div> */}
    </footer>
  )
}

export default CheckoutFooter
