import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CommentTextBox from './CommentTextBox'
import { Rate } from 'antd'
import './ListingInfo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import evChargingIcon from '../assets/parking-features-icons/ev-charging.png'
import handicapIcon from '../assets/parking-features-icons/handicap.png'
import inAndOutIcon from '../assets/parking-features-icons/in-and-out.png'
import indoorsParkingIcon from '../assets/parking-features-icons/indoors-parking.png'
import onsiteStaffIcon from '../assets/parking-features-icons/onsite-staff.png'
import outdoorsParkingIcon from '../assets/parking-features-icons/outdoors-parking.png'
import pavedRoadicon from '../assets/parking-features-icons/paved-road.png'
import roofedIcon from '../assets/parking-features-icons/roofed.png'
import selfParkIcon from '../assets/parking-features-icons/selfpark.png'
import valetIcon from '../assets/parking-features-icons/valet.png'

class ListingInfo extends Component {
  
  render() {
    const parkingTypeProp = this.props.currentListing.properties.parking_type
    let parkingTypeClass

    if (parkingTypeProp === 'Lot') {
      parkingTypeClass =
        'ListingInfo__ParkingTypeBtn ListingInfo__ParkingTypeLot'
    } else if (parkingTypeProp === 'Garage') {
      parkingTypeClass =
        'ListingInfo__ParkingTypeBtn ListingInfo__ParkingTypeGarage'
    } else if (parkingTypeProp === 'Valet') {
      parkingTypeClass =
        'ListingInfo__ParkingTypeBtn ListingInfo__ParkingTypeValet'
    } else if (parkingTypeProp === 'Resident') {
      parkingTypeClass =
        'ListingInfo__ParkingTypeBtn ListingInfo__ParkingTypeResident'
    }

    let listingPrice
    if (this.props.filterHourlyState) {
      listingPrice = `$${this.props.currentListing.properties.hourly_price} total`
    } else if (this.props.filterMonthlyState) {
      listingPrice = `$${this.props.currentListing.properties.monthly_price}/month`
    }

    return (
      <article className='ListingInfo'>
        <section className='ListingInfo__Summary'>
          <div className='ListingInfo__ImgContainer'>
            <figure className='ListingInfo__ImgFigure'>
              <img
                className='ListingInfo__Img'
                src={this.props.currentListing.properties.listing_image}
                alt=''
              />
            </figure>
          </div>

          <div className='ListingInfo__Overview'>
            <div>
              <div
                className='ListingInfo__BackToParkingListing'
                onClick={this.props.goBack}
              >
                <FontAwesomeIcon
                  className='ListingInfo__ArrowLeftIcon'
                  icon={faArrowLeft}
                />
                Back to Parking Listing
              </div>

              <br></br>
              <div className='ListingInfo__AddressParkingType'>
                <div className='ListingInfo__Address'>
                  {this.props.currentListing.properties.address}
                </div>
                <div className={parkingTypeClass}>
                  {this.props.currentListing.properties.parking_type}
                </div>
              </div>

              <Rate
                allowHalf
                disabled
                defaultValue={this.props.currentListing.properties.rating}
              />

              <div className='ListingInfo__MilesAway'>0.2 miles away</div>
            </div>

            <div className='ListingInfo__BookingBtnAndListingPrice'>
              <button className='ListingInfo__BookingBtn'>Book My Spot</button>

              <div className='ListingInfo__ListingPrice'>{listingPrice}</div>
            </div>
          </div>
        </section>

        <div className='ListingInfo__Divider'></div>

        <section className='ListingInfo__AddressContact'>
          <div className='ListingInfo__AddressContainer'>
            <div className='ListingInfo__AddressLabel'>Address</div>
            <br></br>
            <div className='ListingInfo__HostInfo'>
              {this.props.currentListing.properties.address}
            </div>
            <div className='ListingInfo__HostInfo'>{this.props.currentListing.properties.city} {this.props.currentListing.properties.zipcode}</div>
            {/* <div className='ListingInfo__HostInfo'>
              {this.props.currentListing.properties.zipcode}
            </div> */}
          </div>

          <div className='ListingInfo__ContactContainer'>
            <div className='ListingInfo__ContactLabel'>Contact</div>
            <br></br>
            <div className='ListingInfo__HostInfo'>
              {this.props.currentListing.properties.contact_name}
            </div>
            <div className='ListingInfo__HostInfo'>
              {this.props.currentListing.properties.contact_number}
            </div>
            <div className='ListingInfo__HostInfo'>
              <a
                className='ListingInfo__ContactEmail'
                href={`mailto:${this.props.currentListing.properties.contact_email}`}
              >
                {this.props.currentListing.properties.contact_email}
              </a>
            </div>
          </div>
        </section>

        <div className='ListingInfo__Divider'></div>

        <section className='ListingInfo__FeaturesContainer'>
          <div className='ListingInfo__FeaturesLabel'>Features</div>

          <br></br>
          <ul className='ListingInfo__ParkingFreatureList'>
            {this.props.currentListing.properties.features.map((feature) => {
              let parkingIcon

              if (feature === 'EV Charging Available') {
                parkingIcon = evChargingIcon
              } else if (feature === 'Handicap Accessible') {
                parkingIcon = handicapIcon
              } else if (feature === 'Indoors Parking') {
                parkingIcon = indoorsParkingIcon
              } else if (feature === 'Paved Road') {
                parkingIcon = pavedRoadicon
              } else if (feature === 'On-Site Staff') {
                parkingIcon = onsiteStaffIcon
              } else if (feature === 'Self-Park') {
                parkingIcon = selfParkIcon
              } else if (feature === 'Outdoors Parking') {
                parkingIcon = outdoorsParkingIcon
              } else if (feature === 'Roofed') {
                parkingIcon = roofedIcon
              } else if (feature === 'In & Out Allowed') {
                parkingIcon = inAndOutIcon
              } else if (feature === 'Valet') {
                parkingIcon = valetIcon
              }

              return (
                <li className='ListingInfo__ParkingFeatureItem'>
                  <img
                    className='ListingInfo__ParkingIcon'
                    src={parkingIcon}
                    alt=''
                  />
                  {feature}
                </li>
              )
            })}
          </ul>
        </section>

        <div className='ListingInfo__Divider'></div>

        <section className='ListingInfo__ReviewsContainer'>
          <div className='ListingInfo__ReviewsLabel'>Reviews</div>
          <br></br>
          <Rate
            allowHalf
            disabled
            defaultValue={this.props.currentListing.properties.rating}
          />

          <div className='ListingInfo__LoginToReview'>
            Please&nbsp;
            <Link exact to='/login' className='ListingInfo__LoginLink'>
              Login
            </Link>
            &nbsp;to leave a review
          </div>

          <CommentTextBox />
        </section>
      </article>
    )
  }
}

export default ListingInfo
