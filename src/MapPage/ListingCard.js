import React, { Component } from 'react'
// import './MapPage.scss'

class ListingCard extends Component {

  render() {
    return (
      <div id={`listing-${this.props.id}`} className='item'>
        {/* {console.log(props.listing.properties)} */}

        {/* eslint-disable-next-line */}
        <a
          href='#'
          id={`link-${this.props.id}`}
          className='title'
          onMouseOver={() => {
            this.props.handleMouseOver(this.props.listing, this.props.id)
          }}
        >
          {this.props.listing.properties.name}
        </a>
        <div>
          <br></br>
          {this.props.listing.properties.address}
          <br></br>
          {this.props.listing.properties.city}
          <span>, CA</span>
          <span> {this.props.listing.properties.zipcode}</span>
          <br></br>
          {/* {props.listing.properties.phone ? ' · ' + props.listing.properties.phoneFormatted: null} */}
          <br></br>
          {`Hourly Rate: $${this.props.listing.properties.hourly_price}`}
          <br></br>
          {`Monthly Rate: $${this.props.listing.properties.monthly_price}`}
          <br></br>
          <br></br>
          <p onClick={() => this.props.handleListingCardDetails(this.props.listing)}>Details</p>
        </div>
      </div>
    )
  }
}

export default ListingCard

