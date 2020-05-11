import React from 'react'
import ListingHeader from './ListingHeader'

function ListingContainer(props) {
  return (
    <article class='ListingContainer'>
      <ListingHeader spotsAvailable={props.spotsAvailable}
      parkingSpotsNear={props.parkingSpotsNear}
      />
      {props.children}
    </article>
  )
}

export default ListingContainer
