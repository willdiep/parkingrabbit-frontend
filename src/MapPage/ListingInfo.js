import React, { Component } from 'react'
import CommentTextBox from './CommentTextBox'
import { Rate } from 'antd'
import './ListingInfo.scss'
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
    return (
      <article className='ListingInfo'>
        <section className='ListingInfo__Summary'>
          <div className='ListingInfo__ImgContainer'>
            <figure className='ListingInfo__ImgFigure'>
              <img
                className='ListingInfo__Img'
                src='https://via.placeholder.com/500x350'
                alt=''
              />
            </figure>
          </div>

          <div className='ListingInfo__Overview'>
            <div>
              <div onClick={this.props.goBack}>Back to Parking Listing</div>

              <br></br>
              <div className='ListingInfo__AddressParkingType'>
                <div>{this.props.currentListing.properties.address}</div>
                <div>{this.props.currentListing.properties.parking_type}</div>
              </div>

              <Rate
                allowHalf
                disabled
                defaultValue={this.props.currentListing.properties.rating}
              />

              <div className='ListingCard__MilesAway'>0.2 miles away</div>
            </div>

            <button className='ListingCard__BookingBtn'>Book My Spot</button>
          </div>
        </section>

        <div className='ListingInfo__Divider'></div>

        <section className='ListingInfo__AddressContact'>
          <div className='ListingInfo__AddressContainer'>
            <div>
              <strong>Address</strong>
            </div>
            <br></br>
            <div>{this.props.currentListing.properties.address}</div>
            {/* <div>{this.props.currentListing.properties.city}</div> */}
            <div>San Francisco, CA</div>
            <div>{this.props.currentListing.properties.zipcode}</div>
          </div>

          <div className='ListingInfo__ContactContainer'>
            <div>
              <strong>Contact</strong>
            </div>
            <br></br>
            <div>{this.props.currentListing.properties.contact_name}</div>
            <div>{this.props.currentListing.properties.contact_number}</div>
            <div>{this.props.currentListing.properties.contact_email}</div>
          </div>
        </section>

        <div className='ListingInfo__Divider'></div>

        <section className='ListingInfo__Features'>
          <p>
            <strong>Features</strong>
          </p>
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
                  <img src={parkingIcon} alt='' />
                  {feature}
                </li>
              )
            })}
          </ul>
        </section>

        <div className='ListingInfo__Divider'></div>

        <section className='ListingInfo__Reviews'>
          <div>
            <strong>Reviews</strong>
          </div>
          <Rate
            allowHalf
            disabled
            defaultValue={this.props.currentListing.properties.rating}
          />
          <p>Please Login to leave a review</p>

          <CommentTextBox />
        </section>
      </article>
    )
  }
}

export default ListingInfo
