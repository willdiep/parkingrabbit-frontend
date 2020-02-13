import React, { Component } from 'react'
// import mapboxgl from 'mapbox-gl'
import AlgoliaPlaces from 'algolia-places-react'

import heroimage from '../images/hero-image.png'
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
  // componentDidMount() {
  //   var map = new mapboxgl.Map({
  //     container: 'map',
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [-79.4512, 43.6568],
  //     zoom: 13
  //   })
  // }

  handleChange = coordinatesArr => {
    // console.log(coordinatesArr.constructor.name)
    // console.log(coordinatesArr)
    this.props.handleSetLatLng(coordinatesArr)
    // this.props.handleSetLng(coordinatesArr[1])
  }

  render() {
    return (
      <div>
        <main className='header__content'>
          <article className='header__heroimage'>
            <section>
              <img className='header__carrotcar' src={heroimage} alt='hero' />
            </section>

            <section className='header__header'>
              <p className='header__text1'>
                Looking for parking doesn’t <br></br>have to be an easter egg
                hunt!
              </p>
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

              <AlgoliaPlaces
                placeholder='Write an address here'
                options={{
                  appId: 'plFF2HVFCYHZ',
                  apiKey: '0b5007eeca59b12374f402743f853d98',
                  language: 'en',
                  countries: ['us'],
                  aroundLatLng: '37.773972, -122.431297',
                  aroundRadius: 10000
                  // type: 'city'
                  // Other options from https://community.algolia.com/places/documentation.html#options
                }}
                onChange={({
                  query,
                  rawAnswer,
                  suggestion,
                  suggestionIndex
                }) => {
                  // console.log(
                  //   'Fired when suggestion selected in the dropdown or hint was validated.'
                  // )
                  // console.log([suggestion.latlng.lat, suggestion.latlng.lng])
                  this.handleChange([
                    suggestion.latlng.lat,
                    suggestion.latlng.lng
                  ])
                }}
                onSuggestions={({ rawAnswer, query, suggestions }) =>
                  console.log(
                    'Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.'
                  )
                }
                onCursorChanged={({
                  rawAnswer,
                  query,
                  suggestion,
                  suggestonIndex
                }) =>
                  console.log(
                    'Fired when arrows keys are used to navigate suggestions.'
                  )
                }
                onClear={() => console.log('Fired when the input is cleared.')}
                onLimit={({ message }) =>
                  console.log('Fired when you reached your current rate limit.')
                }
                onError={({ message }) =>
                  console.log(
                    'Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.'
                  )
                }
              />

              <p className='header__parkingnearme'>Find Parking Near Me</p>
            </section>
          </article>
        </main>
      </div>
    )
  }
}

export default Header
