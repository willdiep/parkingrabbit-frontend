import React, { Component } from 'react'
import { Rate } from 'antd'
import './ListingCard.scss'

import { withRouter } from 'react-router'

class ListingCard extends Component {
  handleBtn = (e) => {
    // debugger
    if (!localStorage.jwt) {
      console.log('Please sign-up or login')
    } else {
      const listingIdProp = this.props.id
      localStorage.setItem('listingId', listingIdProp)

      const listingImgProp = this.props.listing.properties.listing_image
      localStorage.setItem('listingImg', listingImgProp)

      const listingAddressProp = this.props.listing.properties.address
      localStorage.setItem('listingAddress', listingAddressProp)

      const lisingZipcodeProp = this.props.listing.properties.zipcode
      localStorage.setItem('listingZipcode', lisingZipcodeProp)

      localStorage.setItem('bookMySpotBtnClicked', true)

      const listingPriceString =
        e.target.parentElement.nextElementSibling.innerText
      //  match() returns an array
      // Grab first element in array & convert to numbers
      const extractNums = +listingPriceString.match(/\d+/g)[0]
      localStorage.setItem('listingPrice', extractNums)

      // console.log(localStorage.listingPrice)
      this.props.history.push('/checkout')
    }
  }

  render() {
    const parkingTypeProp = this.props.listing.properties.parking_type
    let parkingTypeClass

    if (parkingTypeProp === 'Lot') {
      parkingTypeClass =
        'ListingCard__ParkingTypeBtn ListingCard__ParkingTypeLot'
    } else if (parkingTypeProp === 'Garage') {
      parkingTypeClass =
        'ListingCard__ParkingTypeBtn ListingCard__ParkingTypeGarage'
    } else if (parkingTypeProp === 'Valet') {
      parkingTypeClass =
        'ListingCard__ParkingTypeBtn ListingCard__ParkingTypeValet'
    } else if (parkingTypeProp === 'Resident') {
      parkingTypeClass =
        'ListingCard__ParkingTypeBtn ListingCard__ParkingTypeResident'
    }

    let listingPrice
    if (this.props.filterHourlyState) {
      listingPrice = `$${this.props.listing.properties.hourly_price} total`
      // localStorage.setItem('listingPrice', listingPrice)
    } else if (this.props.filterMonthlyState) {
      listingPrice = `$${this.props.listing.properties.monthly_price}/month`
      // localStorage.setItem('listingPrice', listingPrice)
    }

    return (
      <article
        id={`listing-${this.props.id}`}
        className='ListingCard'
        onMouseOver={() => {
          this.props.handleMouseOver(this.props.listing, this.props.id)
        }}
      >
        {/* {console.log(props.listing.properties)} */}

        <section>
          <figure className='ListingCard__ImgFigure'>
            <img
              className='ListingCard__Img'
              src={this.props.listing.properties.listing_image}
              alt=''
            />
          </figure>
        </section>

        <section className='ListingCard__Overview'>
          <div className='ListingCard__AddressParkingTypeRate'>
            <div className='ListingCard__AddressParkingType'>
              <div id={`link-${this.props.id}`} className='ListingCard_Address'>
                {/* {this.props.listing.properties.name} */}
                <div className='ListingCard__Address'>
                  {this.props.listing.properties.address}
                </div>
              </div>

              <div className={parkingTypeClass}>
                {this.props.listing.properties.parking_type}
              </div>
            </div>

            <Rate
              allowHalf
              disabled
              defaultValue={this.props.listing.properties.rating}
            />

            <div className='ListingCard__MilesAway'>0.2 miles away</div>
          </div>

          {/* <br></br> */}
          {/* <br></br> */}
          {/* <div>{this.props.listing.properties.city}</div>
            <span>, CA</span>
            <span> {this.props.listing.properties.zipcode}</span> */}
          {/* <br></br> */}
          {/* {props.listing.properties.phone ? ' · ' + props.listing.properties.phoneFormatted: null} */}

          {/* <br></br>
            <br></br> */}

          <div className='ListingCard__BookingDetailsRate'>
            <div className='ListingCard__BookingDetails'>
              <button
                // onClick={this.handleBtn}
                onClick={this.handleBtn}
                className='ListingCard__BookingBtn'
              >
                Book My Spot
              </button>

              <div
                className='ListingCard__Details'
                onClick={() =>
                  this.props.handleListingCardDetails(this.props.listing)
                }
              >
                Details
              </div>
            </div>

            <div className='ListingCard__ListingPrice'>{listingPrice}</div>
          </div>
        </section>
      </article>
    )
  }
}

export default withRouter(ListingCard)
