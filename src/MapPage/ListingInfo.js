import React, { Component } from 'react'
import { Rate } from 'antd'

class ListingInfo extends Component {

  state = {}

  render() {
    return (
      <div>
        <h4 onClick={this.props.goBack}>Back to Parking Listing</h4>

        <p>{this.props.currentListing.properties.name}</p>
        
        <Rate allowHalf disabled defaultValue={this.props.currentListing.properties.rating} />
        {/* <p>{this.props.currentListing.properties.rating}</p> */}

        <p>{this.props.currentListing.properties.parking_type}</p>

        <p>
          <strong>Address</strong>
        </p>
        <p>{this.props.currentListing.properties.address}</p>
        <p>{this.props.currentListing.properties.city}</p>
        <p>{this.props.currentListing.properties.zipcode}</p>

        <p>
          <strong>Contact</strong>
        </p>
        <p>{this.props.currentListing.properties.contact_name}</p>
        <p>{this.props.currentListing.properties.contact_number}</p>
        <p>{this.props.currentListing.properties.contact_email}</p>

        <p>
          <strong>Features</strong>
        </p>

        <p>
          <strong>Reviews</strong>
        </p>
        <p>Please Login to leave a review</p>
      </div>
    )
  }
}

export default ListingInfo
