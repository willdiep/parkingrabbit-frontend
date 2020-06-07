import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './ListingConfirmation.scss'

class ListingConfirmation extends Component {
  backToMappage = () => {
    this.props.history.push('/mappage')
  }

  render() {
    const listingImg = localStorage.getItem('parkingImg')
    const listingAddress = localStorage.getItem('listingAddress')
    const listingZipcode = localStorage.getItem('listingZipcode')

    const listingPrice = localStorage.getItem('listingPrice')

    const totalPrice = +listingPrice + 0.5

    return (
      <aside className='ListingConfirmation'>
          <img
            className='ListingConfirmation__ListingImg'
            src={listingImg}
            alt='parking listing'
          />

        <section className='ListingConfirmation__Details'>
          <p
            className='ListingConfirmation__ChangeSpotLink'
            onClick={this.backToMappage}
          >
            Change My Spot
          </p>

          <br></br>

          <p className='ListingConfirmation__Address'>
            {listingAddress}
            <br></br>
            San Francisco, CA {listingZipcode}
          </p>
        </section>

        <div className='ListingConfirmation__Divider'></div>

        <section className='ListingConfirmation__SpotPriceAndTotal'>
          <div className='ListingConfirmation__SpotPrice'>
            <p className='ListingConfirmation__SpotPriceText'>Subtotal: </p>
            <p className='ListingConfirmation__SpotPriceCost'>
              ${listingPrice}.00
            </p>
          </div>

          <div className='ListingConfirmation__SpotPrice'>
            <p className='ListingConfirmation__SpotPriceText'>Service Fee: </p>
            <p className='ListingConfirmation__SpotPriceCost'>$00.50</p>
          </div>

          <div className='ListingConfirmation__Total'>
            <p className='ListingConfirmation__TotalText'>Total:</p>
            <div className='ListingConfirmation__TotalCost'>
              ${totalPrice.toFixed(2)}
            </div>
          </div>
        </section>
      </aside>
    )
  }
}

export default withRouter(ListingConfirmation)
