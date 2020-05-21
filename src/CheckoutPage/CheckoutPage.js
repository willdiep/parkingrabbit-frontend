import React, { Component } from 'react'
import { Steps, Button, message } from 'antd'
import DriverInformation from './DriverInformation'
import PaymentInformation from './PaymentInformation'
import BookingConfimation from './BookingConfimation'
import 'antd/dist/antd.css'
import './CheckoutPage.scss'

const { Step } = Steps

class Checkout extends Component {
  state = {
    current: 1,
    driverName: null,

  }

  next() {
    const current = this.state.current + 1
    this.setState({ current })
  }

  prev() {
    const current = this.state.current - 1
    this.setState({ current })
  }

  handleDriverName = (e) => {
    console.log('it works!')
    this.setState({
      driverName: e.target.value
    })
  }

  render() {
    const { current } = this.state

    const steps = [
      {
        title: 'Find A Parking Spot',
        content: '',
      },
      {
        title: 'Driver Information',
        content: <DriverInformation handleDriverName={this.handleDriverName} diverName={this.state.driverName} />,
      },
      {
        title: 'Payment Information',
        content: <PaymentInformation />,
      },
      {
        title: 'Booking Confirmation',
        content: <BookingConfimation />,
      },
    ]

    return (
      <div className='Checkout'>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className='steps-content'>{steps[current].content}</div>
        <div className='steps-action'>
          {current > 0 && (
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

export default Checkout
