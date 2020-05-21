import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import './ListingHeader.scss'

class ListingHeader extends Component {

  render() {
    return (
      <section className='ListingHeader'>
        <div className='ListingHeader__LocationInput'>
          <strong>Parking Spots Near: </strong>{this.props.parkingSpotsNear}
        </div>
        <div className='ListingHeader__SpotsAvailable'>
          ({this.props.spotsAvailable} Spots Available)
        </div>


        <div className='ListingHeader__SortByDistance'>
          Sort by: Distance
          <FontAwesomeIcon
            className='ListingHeader__CaretDownIcon'
            icon={faCaretDown}
          />
        </div>

        <div className='ListingHeader__Divider'></div>
      </section>
    )
  }
}

export default ListingHeader
