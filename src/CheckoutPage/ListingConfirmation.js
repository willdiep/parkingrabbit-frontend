import React, { Component } from 'react'
import './ListingConfirmation.scss'

class ListingConfirmation extends Component {
  render() {
    return (
      <aside className='ListingConfirmation'>
        <figure className='ListingConfirmation__ListingFigure'>
          <img
            className='ListingConfirmation__ListingImg'
            src='https://res.cloudinary.com/dobz3lasb/image/upload/v1589870717/4_sv4f9t.jpg'
            alt='parking listing'
          />
        </figure>

        <section className='ListingConfirmation__Details'>
          <p className='ListingConfirmation__ChangeSpotLink'>Change My Spot</p>
          <p className='ListingConfirmation__Address'>
            998 Jessie St.
            <br></br>
            San Francisco, CA
            <br></br>
            94103
          </p>
        </section>

        <div className='ListingConfirmation__Divider'></div>

        <section className='ListingConfirmation__SpotPriceAndTotal'>
          <div className='ListingConfirmation__SpotPrice'>
            <p className='ListingConfirmation__SpotPriceText'>Spot Price: </p>
            <p className='ListingConfirmation__SpotPriceCost'>$00.00</p>
          </div>

          <div className='ListingConfirmation__Total'>
            <p className='ListingConfirmation__TotalText'>Total:</p>
            <p className='ListingConfirmation__TotalCost'>$00.00</p>
          </div>
        </section>
      </aside>
    )
  }
}

export default ListingConfirmation
