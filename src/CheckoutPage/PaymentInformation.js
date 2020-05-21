import React, { Component } from 'react'
import ListingConfirmation from './ListingConfirmation'
import './PaymentInformation.scss'

class PaymentInformation extends Component {
  render() {
    return (
      <div className='PaymentInformation'>
        <header className='PaymentInformation__Header'>
          Payment Information
        </header>
        <article className='PaymentInformation__Container'>
          <form className='PaymentInformation__Form'>
            <fieldset>
              <legend>Billing Information</legend>

              <p>
                <label htmlFor='size_1'>Driver Name</label>
                <br></br>
                <input
                  className='PaymentInformation__FormDriverLabel'
                  type='text'
                  name=''
                  value=''
                  placeholder=''
                />
              </p>

              <p>
                <label htmlFor='size_1'>Address</label>
                <br></br>
                <input
                  className='PaymentInformation__FormDriverLabel'
                  type='text'
                  name=''
                  value=''
                  placeholder=''
                />
              </p>

              <div className='PaymentInformation__FormDriverColumns'>
                <p>
                  <label htmlFor='size_1'>City</label>
                  <br></br>
                  <input
                    className='PaymentInformation__FormDriverLabel'
                    type='text'
                    name=''
                    value=''
                    placeholder=''
                  />
                </p>
                <p>
                  <label htmlFor='size_1'>State</label>
                  <br></br>
                  <input
                    className='PaymentInformation__FormDriverLabel'
                    type='text'
                    name=''
                    value=''
                    placeholder=''
                  />
                </p>
                <p>
                  <label htmlFor='size_1'>Zipcode</label>
                  <br></br>
                  <input
                    className='PaymentInformation__FormDriverLabel'
                    type='text'
                    name=''
                    value=''
                    placeholder=''
                  />
                </p>
              </div>

              <p>
                <label htmlFor='size_1'>Contact Number</label>
                <br></br>
                <input
                  className='PaymentInformation__FormDriverInput'
                  type='text'
                  name=''
                  value=''
                  placeholder=''
                />
              </p>
            </fieldset>

            <fieldset>
              <legend>Card Information</legend>

              <p>
                <label htmlFor='size_1'>Cardholder Name</label>
                <br></br>
                <input
                  className='PaymentInformation__FormDriverLabel'
                  type='text'
                  name=''
                  value=''
                  placeholder=''
                />
              </p>

              <div className='PaymentInformation__FormDriverColumns'>
                <p>
                  <label htmlFor='size_1'>Card Number</label>
                  <br></br>
                  <input
                    className='PaymentInformation__FormDriverLabel'
                    type='number'
                    name=''
                    value=''
                    placeholder=''
                  />
                </p>
                <p>
                  <label htmlFor='size_1'>Exp. Date (MM/YY)</label>
                  <br></br>
                  <input
                    className='PaymentInformation__FormDriverLabel'
                    type='number'
                    name=''
                    value=''
                    placeholder=''
                  />
                </p>
                <p>
                  <label htmlFor='size_1'>CVV</label>
                  <br></br>
                  <input
                    className='PaymentInformation__FormDriverLabel'
                    type='number'
                    name=''
                    value=''
                    placeholder=''
                  />
                </p>
              </div>
            </fieldset>
          </form>

          <ListingConfirmation />
        </article>
      </div>
    )
  }
}

export default PaymentInformation
