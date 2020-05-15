import React, { Component } from 'react'
import CommentTextBox from './CommentTextBox'
import { Rate } from 'antd'
import './ListingInfo.scss'

class ListingInfo extends Component {
  state = {}

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
            <div>{this.props.currentListing.properties.city}</div>
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
          <ul>
            {this.props.currentListing.properties.features.map((feature) => {
              return <li>{feature}</li>
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
