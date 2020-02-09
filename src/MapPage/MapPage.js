import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import ListingCard from './ListingCard'
import './MapPage.scss'

const styleLink = document.createElement('link')
styleLink.rel = 'stylesheet'
styleLink.href =
  'https://api.tiles.mapbox.com/mapbox-gl-js/v1.3.1/mapbox-gl.css'
document.head.appendChild(styleLink)

mapboxgl.accessToken =
  'pk.eyJ1Ijoid2lsbGQxMCIsImEiOiJjazVrZjgweGUwZGpiM2RucnB6ZW83cnF1In0.QuvhJzfhJrxg-dNfhVrJ7A'

class MapPage extends Component {
  constructor(props) {
    super(props)

    this.map = undefined

    this.state = {
      active: '',
      lng: -77.034084142948,
      lat: 38.909671288923,
      zoom: 9,
      stores: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.034084142948, 38.909671288923]
            },
            properties: {
              phoneFormatted: '(202) 234-7336',
              phone: '2022347336',
              address: '1471 P St NW',
              city: 'Washington DC',
              country: 'United States',
              crossStreet: 'at 15th St NW',
              postalCode: '20005',
              state: 'D.C.',
              price: 10
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.049766, 38.900772]
            },
            properties: {
              phoneFormatted: '(202) 507-8357',
              phone: '2025078357',
              address: '2221 I St NW',
              city: 'Washington DC',
              country: 'United States',
              crossStreet: 'at 22nd St NW',
              postalCode: '20037',
              state: 'D.C.',
              price: 20
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.043929, 38.910525]
            },
            properties: {
              phoneFormatted: '(202) 387-9338',
              phone: '2023879338',
              address: '1512 Connecticut Ave NW',
              city: 'Washington DC',
              country: 'United States',
              crossStreet: 'at Dupont Circle',
              postalCode: '20036',
              state: 'D.C.',
              price: 30
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.0672, 38.90516896]
            },
            properties: {
              phoneFormatted: '(202) 337-9338',
              phone: '2023379338',
              address: '3333 M St NW',
              city: 'Washington DC',
              country: 'United States',
              crossStreet: 'at 34th St NW',
              postalCode: '20007',
              state: 'D.C.',
              price: 40
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.002583742142, 38.887041080933]
            },
            properties: {
              phoneFormatted: '(202) 547-9338',
              phone: '2025479338',
              address: '221 Pennsylvania Ave SE',
              city: 'Washington DC',
              country: 'United States',
              crossStreet: 'btwn 2nd & 3rd Sts. SE',
              postalCode: '20003',
              state: 'D.C.',
              price: 50
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-76.933492720127, 38.99225245786]
            },
            properties: {
              address: '8204 Baltimore Ave',
              city: 'College Park',
              country: 'United States',
              postalCode: '20740',
              state: 'MD',
              price: 60
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.097083330154, 38.980979]
            },
            properties: {
              phoneFormatted: '(301) 654-7336',
              phone: '3016547336',
              address: '4831 Bethesda Ave',
              cc: 'US',
              city: 'Bethesda',
              country: 'United States',
              postalCode: '20814',
              state: 'MD',
              price: 70
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.359425054188, 38.958058116661]
            },
            properties: {
              phoneFormatted: '(571) 203-0082',
              phone: '5712030082',
              address: '11935 Democracy Dr',
              city: 'Reston',
              country: 'United States',
              crossStreet: 'btw Explorer & Library',
              postalCode: '20190',
              state: 'VA',
              price: 80
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.10853099823, 38.880100922392]
            },
            properties: {
              phoneFormatted: '(703) 522-2016',
              phone: '7035222016',
              address: '4075 Wilson Blvd',
              city: 'Arlington',
              country: 'United States',
              crossStreet: 'at N Randolph St.',
              postalCode: '22203',
              state: 'VA',
              price: 90
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-75.28784, 40.008008]
            },
            properties: {
              phoneFormatted: '(610) 642-9400',
              phone: '6106429400',
              address: '68 Coulter Ave',
              city: 'Ardmore',
              country: 'United States',
              postalCode: '19003',
              state: 'PA',
              price: 100
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-75.20121216774, 39.954030175164]
            },
            properties: {
              phoneFormatted: '(215) 386-1365',
              phone: '2153861365',
              address: '3925 Walnut St',
              city: 'Philadelphia',
              country: 'United States',
              postalCode: '19104',
              state: 'PA',
              price: 110
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-77.043959498405, 38.903883387232]
            },
            properties: {
              phoneFormatted: '(202) 331-3355',
              phone: '2023313355',
              address: '1901 L St. NW',
              city: 'Washington DC',
              country: 'United States',
              crossStreet: 'at 19th St',
              postalCode: '20036',
              state: 'D.C.',
              price: 120
            }
          }
        ]
      }
    }
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })

    this.map.on('load', e => {
      /* Add the data to your map as a layer */
      this.map.addLayer({
        id: 'locations',
        // type: 'symbol',
        /* Add a GeoJSON source containing place coordinates and information. */
        source: {
          type: 'geojson',
          data: this.state.stores
        },
        layout: {
          // 'icon-image': 'restaurant-15',
          // 'icon-allow-overlap': true
        }
      })
      // buildLocationList(this.state.stores)
      this.addMarkers()
    })

    // DO WE NEED THIS?
    // this.map.on('click', function(e) {
    //   console.log("from this.map.on 'click'")
    // })
  } // end of componentDidMount()

  flyToStore = currentFeature => {
    console.log('from flyToStore')
    // console.log(currentFeature)
    this.map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 10
    })
  }

  createPopUp = currentFeature => {
    console.log('from createPopUp')
    var popUps = document.getElementsByClassName('mapboxgl-popup')
    // console.log(popUps)
    // /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove()

    var popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        '<h3>Sweetgreen</h3>' +
          '<h4>' +
          currentFeature.properties.address +
          '</h4>'
      )
      .addTo(this.map)
  }

  addMarkers = myComp => {
    /* For each feature in the GeoJSON object above: */
    this.state.stores.features.forEach(marker => {
      /* Create a div element for the marker. */
      var el = document.createElement('div')
      /* Assign a unique `id` to the marker. */
      el.id = 'marker-' + marker.properties.id
      /* Assign the `marker` class to each marker for styling. */
      el.className = 'marker'
      el.textContent = `$${marker.properties.price}`

      /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      //  console.log(myComp)
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map)
    })
  }

  handleClick = (storeInfo, id) => {
    console.log('from handleClick in parent component')
    // console.log(this.state)
    this.flyToStore(storeInfo)
    this.createPopUp(storeInfo)
    this.setState({
      active: `listing -${id}`
    })

    var activeItem = document.getElementsByClassName('active')
    console.log(`activeItem: ${activeItem[0]}`)
    if (activeItem[0]) {
      activeItem[0].classList.remove('active')
      console.log(activeItem.length)
    }
    document.querySelector(`#listing-${id}`).classList.add('active')
    // this.parentNode.classList.add('active')
    console.log(document.querySelector(`#listing-${id}`).classList)
  }

  render() {
    return (
      <div className='map'>
        <main className='map__container'>
          <section className='sidebar'>
            <div className='heading'>
              <h1>Listings</h1>
            </div>
            <div id='listings' className='listings'>
              {/* MAP THROUGH LISTINGCARD HERE */}

              {this.state.stores.features.map((store, i) => {
                // console.log(store)
                return (
                  <ListingCard
                    key={i}
                    id={i}
                    store={store}
                    handleClick={this.handleClick}
                  />
                )
              })}
            </div>
          </section>
          <section
            ref={el => (this.mapContainer = el)}
            className='map-area'
          ></section>
        </main>
      </div>
    )
  }
}

export default MapPage
