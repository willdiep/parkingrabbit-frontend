import React, { Component } from 'react'
// import AlgoliaPlaces from 'algolia-places-react'
import SearchBtn from '../SearchBtn/SearchBtn'
import LineBreak from '../GLOBAL/LineBreak'
import './Header.scss'

// const styleLink = document.createElement('link')
// styleLink.rel = 'stylesheet'
// styleLink.href = 'https://api.mapbox.com/mapbox-gl-js/v1.7.0/mapbox-gl.css'
// document.head.appendChild(styleLink)

// const styleLink2 = document.createElement('link')
// styleLink2.rel = 'stylesheet'
// styleLink2.href =
//   'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css'
// document.head.appendChild(styleLink2)

// mapboxgl.accessToken =
//   'pk.eyJ1Ijoid2lsbGQxMCIsImEiOiJjazVrZjgweGUwZGpiM2RucnB6ZW83cnF1In0.QuvhJzfhJrxg-dNfhVrJ7A'

class Header extends Component {
  findUserCurrentLocation = () => {
    const self = this
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo)
    }

    function displayLocationInfo(position) {
      // console.log(self)
      const lng = position.coords.longitude
      const lat = position.coords.latitude

      // console.log(`longitude: ${lng} | latitude: ${lat}`)
      self.props.handleSetLatLng([lat, lng])
      // console.log([lat, lng])
    }
  }

  // handleChange = coordinatesArr => {
  //   // console.log(coordinatesArr.constructor.name)
  //   // console.log(coordinatesArr)
  //   this.props.handleSetLatLng(coordinatesArr)
  //   // this.props.handleSetLng(coordinatesArr[1])
  // }

  render() {
    return (
      <div className='header'>
        {/* <section className='header__header'> */}
        <p className='header__text1'>
          Looking for parking doesn’t <br></br>have to be an easter egg hunt!
        </p>

        <LineBreak />

        <p className='header__text2'>
          Choose from hundreds of available parking spaces <br></br>in San
          Francisco and book them in seconds.
        </p>

        <div id='map'></div>
        <div id='geocoder' className='geocoder'></div>

        {/* <form
                className='header__CTA'
                onSubmit={this.props.setSubmitListingCollection}
              >
                <input
                  type='text'
                  className='header__input'
                  placeholder='Enter Address, Place, District, or Zipcode'
                  value={this.props.stateLocation}
                  onChange={this.props.setUserLocationInput}
                />

                <input
                  type='submit'
                  value='Submit'
                  className='header__submit'
                />
              </form> */}

        <SearchBtn
          handleSetLatLng={this.props.handleSetLatLng}
          handleSetLocationText={
            this.props.handleSetLocationText
          }
        />

        <LineBreak />
        <LineBreak />

        <p
          className='header__parkingnearme'
          onClick={this.findUserCurrentLocation}
        >
          Find Parking Near Me
        </p>

        {/* </section> */}
      </div>
    )
  }
}

export default Header
