import React, { Component } from 'react'
// import listingImg from '../assets/listing.webp'
import { Rate } from 'antd'
import './ListingCard.scss'

class ListingCard extends Component {
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
    } else if (this.props.filterMonthlyState) {
      listingPrice = `$${this.props.listing.properties.monthly_price}/month`
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
              src='https://via.placeholder.com/500x350'
              alt=''
            />
          </figure>
        </section>

        <section className='ListingCard__Content'>
          <div className='ListingCard__AddressParkingTypeRate'>
            <div className='ListingCard__AddressParkingType'>
              <div id={`link-${this.props.id}`} className='ListingCard_Address'>
                {/* {this.props.listing.properties.name} */}
                <div className='ListingCard__Address'>
                  {this.props.listing.properties.address}
                </div>
              </div>

              <div class={parkingTypeClass}>
                {this.props.listing.properties.parking_type}
              </div>
            </div>

            <Rate
              allowHalf
              disabled
              defaultValue={this.props.listing.properties.rating}
            />

            <div>0.2 miles away</div>
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
              <button className='ListingCard__BookingBtn'>Book My Spot</button>

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

export default ListingCard
