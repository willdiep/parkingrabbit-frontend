import React from 'react'
// import './MapPage.scss'

const ListingCard = props => {
  return (
    <div id={`listing-${props.id}`} className="item"> 
      {/* {console.log(props.store)} */}
      {/* eslint-disable-next-line */} 
      <a href="#" id={`link-${props.id}`} className="title" onClick={() => {props.handleClick(props.store, props.id)}}>
        {props.store.properties.address}
      </a> 
      <div>
        {props.store.properties.city}
        {props.store.properties.phone ? ' · ' + props.store.properties.phoneFormatted: null}
        <br></br>
        {`$${props.store.properties.price}`}  
      </div>
    </div>
  )
}

export default ListingCard
