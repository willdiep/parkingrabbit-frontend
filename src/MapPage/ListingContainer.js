import React, { Component } from 'react'
import ListingHeader from './ListingHeader'

class ListingContainer extends Component {

  render() {
    return (
      <article className='ListingContainer'>
        <ListingHeader
          spotsAvailable={this.props.spotsAvailable}
          parkingSpotsNear={this.props.parkingSpotsNear}
        />
        {this.props.children}
      </article>
    )
  }
}

export default ListingContainer
