import React from 'react'
import ListingHeader from './ListingHeader'

function ListingContainer(props) {
  return (
    <article class='ListingContainer'>
      <ListingHeader />
      {props.children}
    </article>
  )
}

export default ListingContainer
