import React, { Component } from 'react'
import { Steps, Button, message } from 'antd'
import { withRouter } from 'react-router'

import DriverInformation from './DriverInformation'
import PaymentInformation from './PaymentInformation'
import BookingConfirmation from './BookingConfirmation'
import ListingConfirmation from './ListingConfirmation'

import 'antd/dist/antd.css'
import './CheckoutPage.scss'

const listingConfirmationComp = <ListingConfirmation />
const { Step } = Steps

class Checkout extends Component {
  state = {
    current: 3,

    driverName: '',
    driverLicense: '',
    driverContactNum: '',
    vehicleLicensePlate: '',
    carMake: '',
    carYear: '',

    driverAddress: '',
    driverCity: '',
    driverState: '',
    driverZipcode: '',
    cardholderName: '',
    cardholderNumber: '',
    cardExpDate: '',
    cardCVV: '',
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
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
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

    const { driverAddress } = this.state
    const { driverCity } = this.state
    const { driverState } = this.state
    const { driverZipcode } = this.state
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
          driverAddress={driverAddress}
          driverCity={driverCity}
          driverState={driverState}
          driverZipcode={driverZipcode}
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
          driverAddress={driverAddress}
          driverCity={driverCity}
          driverState={driverState}
          driverZipcode={driverZipcode}
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
              onClick={() => message.success('Processing complete!')}
            >
              Book my spot
            </Button>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Checkout)
