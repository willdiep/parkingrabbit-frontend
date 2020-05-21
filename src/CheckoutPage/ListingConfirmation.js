import React, { Component } from 'react'
import './ListingConfirmation.scss'
// import listingImg from '../assets/listing.webp'

class ListingConfirmation extends Component {
  render() {
    return (
      <aside className='ListingConfirmation'>
        <figure className='ListingConfirmation__ListingFigure'>
          <img
            className='ListingConfirmation__ListingImg'
            // src={listingImg}
            alt='listing'
          />
        </figure>

        <section className='ListingConfirmation__Spot'>
          <p>Change My Spot</p>
          <p>
            998 Jessie St.
            <br></br>
            San Francisco, CA
            <br></br>
            94103
          </p>
        </section>

        <div className='ListingConfirmation__Divider'></div>

        <section className='ListingConfirmation__Total'>
          <p>Spot Price: $00.00</p>

          <p>Total: $00.00</p>
        </section>
      </aside>
    )
  }
}

export default ListingConfirmation
