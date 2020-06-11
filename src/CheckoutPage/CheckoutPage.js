import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Steps, Button, message } from 'antd'
import Navbar from '../Navbar/Navbar'
import DriverInformation from './DriverInformation'
import PaymentInformation from './PaymentInformation'
import BookingConfirmation from './BookingConfirmation'
import ListingConfirmation from './ListingConfirmation'
import CheckoutFooter from './CheckoutFooter'

import 'antd/dist/antd.css'
import './CheckoutPage.scss'

const listingConfirmationComp = <ListingConfirmation />

const { Step } = Steps

class Checkout extends Component {
  state = {
    current: 1,

    driverName: '' || localStorage.getItem('driverName'),
    driverLicense: '' || localStorage.getItem('driverLicense'),
    driverContactNum: '' || localStorage.getItem('driverContactNum'),
    vehicleLicensePlate: '' || localStorage.getItem('vehicleLicensePlate'),
    carMake: '' || localStorage.getItem('carMake'),
    carYear: '' || localStorage.getItem('carYear'),

    billingAddress: '' || localStorage.getItem('billingAddress'),
    billingCity: '' || localStorage.getItem('billingCity'),
    billingState: '' || localStorage.getItem('billingState'),
    billingZipcode: '' || localStorage.getItem('billingZipcode'),
    cardholderName: '' || localStorage.getItem('cardholderName'),
    cardholderNumber: '' || localStorage.getItem('cardholderNumber'),
    cardExpDate: '' || localStorage.getItem('cardExpDate'),
    cardCVV: '' || localStorage.getItem('cardCVV'),
  }

  next = () => {
    const current = this.state.current + 1
    this.setState({ current })
  }

  prev = () => {
    const current = this.state.current - 1
    this.setState({ current })
  }

  backToMap() {
    this.props.history.push('/mappage')
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    })
    localStorage.setItem(e.target.name, e.target.value)
  }

  handleBookingSubmission = () => {
    // console.log('from handleBookingSubmission')
    console.log(this.props.userId)
    fetch('http://localhost:3000/bookings', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        booking: {
          user_id: this.props.userId,
          listing_id: localStorage.getItem('listingId'),
          driver_name: this.state.driverName,
          driver_license: this.state.driverLicense,
          driver_contact_number: this.state.driverContactNum,
          vehicle_license_plate: this.state.vehicleLicensePlate,
          car_make: this.state.carMake,
          car_year: this.state.carYear,
          billing_address: this.state.billingAddress,
          billing_city: this.state.billingCity,
          billing_state: this.state_billingState,
          billing_zipcode: this.state.billingZipcode,
          cardholder_name: this.state.cardholderName,
          card_number: this.state.cardNumber,
          card_exp_date: this.state.cardExpDate,
          card_cvv: this.state.cardCVV,
          listing_total: localStorage.getItem('listingPrice')
        }
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  render() {
    const { current } = this.state
    const { driverName } = this.state
    const { driverLicense } = this.state
    const { driverContactNum } = this.state
    const { vehicleLicensePlate } = this.state
    const { carMake } = this.state
    const { carYear } = this.state

    const { billingAddress } = this.state
    const { billingCity } = this.state
    const { billingState } = this.state
    const { billingZipcode } = this.state
    const { cardholderName } = this.state
    const { cardholderNumber } = this.state
    const { cardExpDate } = this.state
    const { cardCVV } = this.state

    const steps = [
      {
        title: 'Find A Parking Spot',
      },
      {
        title: 'Driver Information',
      },
      {
        title: 'Payment Information',
      },
      {
        title: 'Booking Confirmation',
      },
    ]

    let content
    if (current === 1) {
      content = (
        <DriverInformation
          handleChange={this.handleChange}
          driverName={driverName}
          driverLicense={driverLicense}
          driverContactNum={driverContactNum}
          vehicleLicensePlate={vehicleLicensePlate}
          carMake={carMake}
          carYear={carYear}
          listingConfirmationComp={listingConfirmationComp}
        />
      )
    } else if (current === 2) {
      content = (
        <PaymentInformation
          handleChange={this.handleChange}
          driverName={driverName}
          billingAddress={billingAddress}
          billingCity={billingCity}
          billingState={billingState}
          billingZipcode={billingZipcode}
          driverContactNum={driverContactNum}
          cardholderName={cardholderName}
          cardholderNumber={cardholderNumber}
          cardExpDate={cardExpDate}
          cardCVV={cardCVV}
          listingConfirmationComp={listingConfirmationComp}
        />
      )
    } else if (current === 3) {
      content = (
        <BookingConfirmation
          listingConfirmationComp={listingConfirmationComp}
          driverName={driverName}
          billingAddress={billingAddress}
          billingCity={billingCity}
          billingState={billingState}
          billingZipcode={billingZipcode}
          driverContactNum={driverContactNum}
          cardholderName={cardholderName}
          cardholderNumber={cardholderNumber}
          cardExpDate={cardExpDate}
          cardCVV={cardCVV}
          driverLicense={driverLicense}
          vehicleLicensePlate={vehicleLicensePlate}
          carMake={carMake}
          carYear={carYear}
        />
      )
    }

    return (
      <>
        <Navbar />
        <br></br>
        <br></br>
        <div className='Checkout'>
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className='steps-content'>{content}</div>
          <div className='steps-action'>
            {current === 1 && (
              <Button style={{ margin: 8 }} onClick={() => this.backToMap()}>
                Back to Map
              </Button>
            )}

            {current > 1 && (
              <Button style={{ margin: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            )}

            {current < steps.length - 1 && (
              <Button type='primary' onClick={() => this.next()}>
                Next
              </Button>
            )}

            {current === steps.length - 1 && (
              <Button
                type='primary'
                onClick={() => {
                  message.success('Processing complete!')
                  this.handleBookingSubmission()
                }}
              >
                Book my spot
              </Button>
            )}
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <CheckoutFooter />
      </>
    )
  }
}

export default withRouter(Checkout)
