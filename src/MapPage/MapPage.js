import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import NavBar from '../Navbar/Navbar'
import Filter from './Filter'
import ListingCard from './ListingCard'
import ListingInfo from './ListingInfo'
import ListingContainer from './ListingContainer'
import mapboxgl from 'mapbox-gl'
import dayjs from 'dayjs'
import './MapPage.scss'

const styleLink = document.createElement('link')
styleLink.rel = 'stylesheet'
styleLink.href =
  'https://api.tiles.mapbox.com/mapbox-gl-js/v1.3.1/mapbox-gl.css'
document.head.appendChild(styleLink)

mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_API_KEY}`

const utc = require('dayjs/plugin/utc')
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)
dayjs.extend(utc)

const currentDate = dayjs()
const datePlus4Hours = currentDate.add(4, 'hour')

const currentDateUTC = currentDate.utc().format()
const datePlus4HoursUTC = currentDate.add(4, 'hour').utc().format()

class MapPage extends Component {
  constructor() {
    super()

    this.map = undefined

    this.state = {
      active: '',
      // LONGER WAY
      // lng: props.setLng,
      // lat: props.setLat,
      zoom: 13,
      allStores: {
        type: 'FeatureCollection',
        features: [],
      },
      displayStores: {
        type: 'FeatureCollection',
        features: [],
      },
      currentListingInfo: null,

      // filterHourlyFromDateTime: '',
      // filterHourlyToDateTime: '',
      filterHourlyFromDateTime: currentDate,
      filterHourlyToDateTime: datePlus4Hours,

      // filterMonthly: null,

      renderFilterHourly: true, // set default to true to render first
      renderFilterMonthly: false,

      renderDisplayStores: true,
    }
  }

  componentDidMount() {
    this.fetchListings()

    this.loadMapAndMarkers()
  }

  componentDidUpdate() {
    this.removeLocationMarker()
  }

  fetchListings = () => {
    const listingsUrl = 'https://parkingrabbit-backend.herokuapp.com/listings'
    fetch(listingsUrl)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)

        let stores = {
          type: 'FeatureCollection',
          features: [],
        }

        result.data.forEach((listing) => {
          // console.log(listing)
          stores.features.push(this.convertJSONToGEOJSON(listing))
        })

        // console.log(allStores)

        this.setState(
          {
            allStores: stores,
            displayStores: stores,
          },
          () => {
            const unixTimeinMs = this.state.allStores.features[0].properties
              .available_start

            const dateObject = new Date(unixTimeinMs)

            const humanDateFormat = dateObject.toLocaleString()

            const monthName = dateObject.toLocaleString('en-US', {
              month: 'long',
            })
            let monthNum
            switch (monthName) {
              case 'January':
                monthNum = 1
                break
              case 'February':
                monthNum = 2
                break
              case 'March':
                monthNum = 3
                break
              case 'April':
                monthNum = 4
                break
              case 'May':
                monthNum = 5
                break
              case 'June':
                monthNum = 6
                break
              case 'July':
                monthNum = 7
                break
              case 'August':
                monthNum = 8
                break
              case 'September':
                monthNum = 9
                break
              case 'October':
                monthNum = 10
                break
              case 'November':
                monthNum = 11
                break
              case 'December':
                monthNum = 12
                break
              default:
                console.log(`Wrong month`)
            }

            console.log(monthNum)
          }
        )
      })
  }

  loadMapAndMarkers = () => {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      // PASSING DOWN PROPS IS EASIER THAN PASSING DOWN PROPS TO STATE ON THIS COMPONENTS
      center: [this.props.setLng, this.props.setLat],

      // LONGER WAY
      // center: [this.state.lng, this.state.lat]

      zoom: this.state.zoom,
    })

    this.map.on('load', (e) => {
      /* Add the data to your map as a layer */
      this.map.addLayer({
        id: 'locations',
        type: 'symbol',
        /* Add a GeoJSON source containing place coordinates and information. */
        source: {
          type: 'geojson',
          data: this.state.displayStores,
        },
        layout: {
          // 'icon-image': 'restaurant-15',
          'icon-allow-overlap': true,
        },
      })

      // Add zoom and rotation controls to the map.
      this.map.addControl(new mapboxgl.NavigationControl())

      // this.addCurrentLocationMarker()
      this.addListingMarkers()
    })

    // DO WE NEED THIS?
    // this.map.on('click', function(e) {
    //   console.log("from this.map.on 'click'")
    // })
  }

  convertJSONToGEOJSON = (listing) => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [listing.attributes.long, listing.attributes.lat],
      },
      properties: {
        id: +listing.id, // converts id to a number
        name: listing.attributes.name,
        address: listing.attributes.address,
        city: listing.attributes.city,
        zipcode: listing.attributes.zipcode,
        description: listing.attributes.description,
        hourly_price: listing.attributes.hourly_price,
        monthly_price: listing.attributes.monthly_price,
        available_start: listing.attributes.available_start,
        available_end: listing.attributes.available_end,
        parking_type: listing.attributes.parking_type,
        contact_name: listing.attributes.contact_name,
        contact_number: listing.attributes.contact_number,
        contact_email: listing.attributes.contact_email,
        rating: listing.attributes.rating,
        listing_image: listing.attributes.listing_image,
        features: listing.attributes.features,
      },
    }
  }

  /* ----------------------------------
   * RENDER FILTER HOURLY AND MONTHLY BUTTONS
  ------------------------------------*/
  handleRenderFilterHourly = (e) => {
    this.setState({
      renderFilterHourly: true,
      renderFilterMonthly: false,
    })
  }

  handleRenderFilterMonthly = (e) => {
    this.setState({
      renderFilterHourly: false,
      renderFilterMonthly: true,
    })
  }

  /* ----------------------------------
   * FTILER HOURLY
  ------------------------------------*/
  handleFilterHourlyFromDatetime = (value) => {
    console.log('handleFilterHourlyFromDatetime: ', value)

    this.setState({
      filterHourlyFromDateTime: value,
    })
  }

  handleFilterHourlyToDateTime = (value) => {
    console.log('handleFilterHourlyToDateTime: ', value)

    this.setState({
      filterHourlyToDateTime: value
    })
  }

  filterAndRenderHourlyDateTime = () => {
    // console.log(this.state.filterHourlyFromDateTime)
    const filterHourlyListings = this.state.allStores.features.filter(
      (listing) => {
        return (
          // this.state.filterHourlyFromDateTime >=
          //   listing.properties.available_start &&
          // this.state.filterHourlyToDateTime <= listing.properties.available_end

          dayjs(this.state.filterHourlyFromDateTime).isBetween(
            listing.properties.available_start,
            listing.properties.available_end,
            null,
            '[]'
          ) &&
          dayjs(this.state.filterHourlyToDateTime).isBetween(
            listing.properties.available_start,
            listing.properties.available_end,
            null,
            '[]'
          )
        )
      }
    )

    this.setState(
      {
        displayStores: {
          type: 'FeatureCollection',
          features: filterHourlyListings,
        },
      },
      () => {
        this.removeListingMarkers()
        this.addListingMarkers()
      }
    )
    // console.log(filterHourlyListings)
  }

  handleOnChangeHourlyFromDateTime = (value, dateString) => {
    // console.log('Selected Time: ', value)
    // console.log('Formatted Selected Time: ', dateString)
    // console.log('typeof: ', typeof dateString)

    // console.log('handleOnChangeHourlyFromDateTime', value.utc().format())

    // if the user clicks on the X cancel button, it will
    // return a null
    if (value === null) {
      this.setState(
        {
          // filterHourlyFromDateTime: '',
          filterHourlyFromDateTime: currentDate,
          renderDisplayStores: false,
        },
        () => {
          this.renderAllStores()
        }
      )
    } else {
      // set state then converts momentjs object to
      //  unix time
      this.setState({
        filterHourlyFromDateTime: value,
        renderDisplayStores: true,
      })
    }
  }

  handleOnChangeHourlyToDateTime = (value, dateString) => {
    // console.log('Selected Time: ', value)
    // console.log('Formatted Selected Time: ', dateString)
    // console.log('typeof: ', typeof dateString)

    // if the user clicks on the X cancel button, it will
    // return a null
    if (value === null) {
      this.setState(
        {
          filterHourlyToDateTime: datePlus4Hours,
          renderDisplayStores: false,
        },
        this.renderAllStores()
      )
    } else {
      // set state then converts momentjs object to
      //  unix time
      this.setState({
        filterHourlyToDateTime: value,
        renderDisplayStores: true,
      })
    }
  }

  /* ----------------------------------
   * FTILER MONTHLY
  ------------------------------------*/

  /* ----------------------------------
   *   MAPBOX
  ------------------------------------*/

  flyToStore = (currentFeature) => {
    // console.log('from flyToStore')
    // console.log(currentFeature)
    this.map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 13,
    })
  }

  createPopUp = (currentFeature) => {
    // console.log('from createPopUp')
    var popUps = document.getElementsByClassName('mapboxgl-popup')
    // console.log(popUps)
    // /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove()

    // var popup = new mapboxgl.Popup({ closeOnClick: false })
    new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        '<h3>Sweetgreen</h3>' +
          '<h4>' +
          currentFeature.properties.address +
          '</h4>'
      )
      .addTo(this.map)
  }

  renderAllStores = () => {
    /* For each feature in the GeoJSON object above: */
    this.state.allStores.features.forEach((marker) => {
      /* Create a div element for the marker. */
      const el = document.createElement('div')
      /* Assign a unique `id` to the marker. */
      el.id = 'marker__listing--' + marker.properties.id
      /* Assign the `marker` class to each marker for styling. */
      el.className = 'marker__listing'
      // console.log(marker.properties)
      el.textContent = `$${marker.properties.hourly_price}`

      /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      //  console.log(myComp)
      // console.log(marker.geometry.coordinates)
      new mapboxgl.Marker(el) // { offset: [0, -23] }
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map)
    })
  }

  addCurrentLocationMarker = (e) => {
    // console.log(e)
    const el = document.createElement('div')
    el.className = 'marker__location'

    new mapboxgl.Marker(el)
      .setLngLat([this.props.setLng, this.props.setLat])
      .addTo(this.map)
  }

  addListingMarkers = (myComp) => {
    /* For each feature in the GeoJSON object above: */
    this.state.displayStores.features.forEach((marker) => {
      /* Create a div element for the marker. */
      const el = document.createElement('div')
      /* Assign a unique `id` to the marker. */
      el.id = 'marker__listing--' + marker.properties.id
      /* Assign the `marker` class to each marker for styling. */
      el.className = 'marker__listing'
      // console.log(marker.properties)
      el.textContent = `$${marker.properties.hourly_price}`

      /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      //  console.log(myComp)
      // console.log(marker.geometry.coordinates)
      new mapboxgl.Marker(el) // { offset: [0, -23] }
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map)
    })
  }

  removeListingMarkers = () => {
    const listingMarkers = document.querySelectorAll('.marker__listing')
    // console.log(listingMarkers.length)
    for (let i = 0; i < listingMarkers.length; i++) {
      listingMarkers[i].remove()
    }
  }

  removeLocationMarker = () => {
    const locationMarker = document.querySelector('.marker__location')

    if (locationMarker) {
      locationMarker.remove()
    }

    this.addCurrentLocationMarker()
  }

  handleMouseOver = (storeInfo, id) => {
    // console.log('from handleClick in parent component')
    // console.log(this.state)
    this.flyToStore(storeInfo)
    // DISABLE POP-UP. RE-RENDER SIDEBAR INFO INSTEAD
    // this.createPopUp(storeInfo)
    this.setState({
      active: `listing -${id}`,
    })

    var activeItem = document.getElementsByClassName('active')
    // console.log(`activeItem: ${activeItem[0]}`)
    if (activeItem[0]) {
      activeItem[0].classList.remove('active')
      // console.log(activeItem.length)
    }
    document.querySelector(`#listing-${id}`).classList.add('active')
    // this.parentNode.classList.add('active')
    // console.log(document.querySelector(`#listing-${id}`).classList)
  }

  /* ----------------------------------
   *   LISTING
  ------------------------------------*/
  handleListingCardDetails = (listing) => {
    // console.log(`listing `, listing)
    // const listingIndex = this.state
    // console.log(this.state.allStores.features.findIndex(listing => listing.properties.id === clickedListingId))
    this.setState({
      currentListingInfo: listing,
    })
  }

  goBack = () => {
    this.setState({
      currentListingInfo: null,
    })
  }

  render() {
    return (
      <div className='Map'>
        <main className='Map__container'>
          <NavBar mapPage={true} {...this.props} />
          <article className='Map__filter'>
            <Filter
              handleSetLatLng={this.props.handleSetLatLng}
              handleFilterHourlyFromDatetime={
                this.handleFilterHourlyFromDatetime
              }
              handleFilterHourlyToDateTime={this.handleFilterHourlyToDateTime}
              filterAndRenderHourlyDateTime={this.filterAndRenderHourlyDateTime}
              handleRenderFilterHourly={this.handleRenderFilterHourly}
              handleRenderFilterMonthly={this.handleRenderFilterMonthly}
              handleOnChangeHourlyFromDateTime={
                this.handleOnChangeHourlyFromDateTime
              }
              handleOnChangeHourlyToDateTime={
                this.handleOnChangeHourlyToDateTime
              }
              filterHourlyState={this.state.renderFilterHourly}
              filterMonthlyState={this.state.renderFilterMonthly}
              handleSetLocationText={this.props.handleSetLocationText}
              
              // hourlyFromDateTimeState={
              //   this.state.filterHourlyFromDateTime
              // }
              // hourlyToDateTimeState={
              //   this.state.filterHourlyToDateTime
              // }
            />
          </article>

          <div className='Map__Divider'></div>

          <article className='Map__content'>
            <aside className='Map__sidebar'>
              {/* <div className='Map__header'> */}
              {/* <h1 className='Map__headerText'>Listings</h1> */}
              {/* </div> */}
              <div id='listings' className='Map__listings'>
                {this.state.currentListingInfo ? (
                  <ListingInfo
                    currentListing={this.state.currentListingInfo}
                    goBack={this.goBack}
                    filterHourlyState={this.state.renderFilterHourly}
                    filterMonthlyState={this.state.renderFilterMonthly}
                  />
                ) : (
                  <ListingContainer
                    spotsAvailable={
                      this.state.renderDisplayStores
                        ? this.state.displayStores.features.length
                        : this.state.allStores.features.length
                    }
                    parkingSpotsNear={this.props.parkingSpotsNear}
                  >
                    {this.state.renderDisplayStores
                      ? this.state.displayStores.features.map((listing) => {
                          return (
                            <ListingCard
                              key={listing.properties.id}
                              id={listing.properties.id}
                              listing={listing}
                              handleMouseOver={this.handleMouseOver}
                              handleListingCardDetails={
                                this.handleListingCardDetails
                              }
                              filterHourlyState={this.state.renderFilterHourly}
                              filterMonthlyState={
                                this.state.renderFilterMonthly
                              }
                              hourlyFromDateTimeState={
                                this.state.filterHourlyFromDateTime
                              }
                              hourlyToDateTimeState={
                                this.state.filterHourlyToDateTime
                              }
                            />
                          )
                        })
                      : this.state.allStores.features.map((listing) => {
                          return (
                            <ListingCard
                              key={listing.properties.id}
                              id={listing.properties.id}
                              listing={listing}
                              handleMouseOver={this.handleMouseOver}
                              handleListingCardDetails={
                                this.handleListingCardDetails
                              }
                              filterHourlyState={this.state.renderFilterHourly}
                              filterMonthlyState={
                                this.state.renderFilterMonthly
                              }
                              hourlyFromDateTimeState={
                                this.state.filterHourlyFromDateTime
                              }
                              hourlyToDateTimeState={
                                this.state.filterHourlyToDateTime
                              }
                            />
                          )
                        })}
                  </ListingContainer>
                )}
              </div>
            </aside>
            <section
              className='Map__canvas'
              ref={(el) => (this.mapContainer = el)}
            ></section>
          </article>
        </main>
      </div>
    )
  }
}

export default MapPage
