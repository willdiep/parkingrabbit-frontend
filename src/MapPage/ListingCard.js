import React from 'react'
// import './MapPage.scss'

const ListingCard = props => {
  return (
    <div id={`listing-${props.id}`} className="item"> 
    {/* {console.log(props.listing.properties)} */}

      {/* eslint-disable-next-line */} 
      <a href="#" id={`link-${props.id}`} className="title" onClick={() => {props.handleClick(props.listing, props.id)}}>
        {props.listing.properties.name}
      </a> 
      <div>
      <br></br>
      {props.listing.properties.address}
        <br></br>
        {props.listing.properties.city}
        <span>, CA</span>
        <span> {props.listing.properties.zipcode}</span>
        <br></br>
        {/* {props.listing.properties.phone ? ' · ' + props.listing.properties.phoneFormatted: null} */}
        <br></br>
        {`Hourly Rate: $${props.listing.properties.hourly_price}`}  
        <br></br>
        {`Monthly Rate: $${props.listing.properties.monthly_price}`}  
      </div>
    </div>
  )
}

export default ListingCard
