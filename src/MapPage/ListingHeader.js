import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import './ListingHeader.scss'

class ListingHeader extends Component {
  render() {
    return (
      <section className='ListingHeader'>
        <div className='ListingHeader__LocationInput'>
          Parking Spots Near: 1460 Mission St.
        </div>
        <div className='ListingHeader__SpotsAvailable'>
          (40 Spots Available)
        </div>

<br></br>
<br></br>

        <div className='ListingHeader__SortByDistance'>
          Sort by: Distance
          <FontAwesomeIcon className='ListingHeader__CaretDownIcon' icon={faCaretDown} />
        </div>

        <div className='ListingHeader__Divider'></div>
      </section>
    )
  }
}

export default ListingHeader
