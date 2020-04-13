import React, { Component } from 'react'
import AlgoliaPlaces from 'algolia-places-react'
import './SearchBtn.scss'

class SearchBtn extends Component {
  handleChange = coordinatesArr => {
    // console.log(coordinatesArr.constructor.name)
    // console.log(coordinatesArr)
    this.props.handleSetLatLng(coordinatesArr)
    // this.props.handleSetLng(coordinatesArr[1])
  }
  render() {
    return (
      <div className='search-btn'>
        <AlgoliaPlaces
        className='search-btn__input'
          placeholder='Search Address, Place, District, or Zipcode'
          options={{
            appId: 'plFF2HVFCYHZ',
            apiKey: '0b5007eeca59b12374f402743f853d98',
            language: 'en',
            countries: ['us'],
            aroundLatLng: '37.773972, -122.431297',
            aroundRadius: 10000
            // useDeviceLocation: true
            // type: 'city'
            // Other options from https://community.algolia.com/places/documentation.html#options
          }}
          onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
            // console.log(
            //   'Fired when suggestion selected in the dropdown or hint was validated.'
            // )
            // console.log([suggestion.latlng.lat, suggestion.latlng.lng])
            this.handleChange([suggestion.latlng.lat, suggestion.latlng.lng])
          }}
          onSuggestions={({ rawAnswer, query, suggestions }) =>
            console.log(
              'Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.'
            )
          }
          onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) =>
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
      </div>
    )
  }
}

export default SearchBtn
