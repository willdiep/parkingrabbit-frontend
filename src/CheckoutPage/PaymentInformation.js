import React from 'react'
import './CheckoutPage.scss'

const PaymentInformation = (props) => {
  return (
    <div className='Checkout'>
      <header className='Checkout__Header'>Payment Information</header>
      <article className='Checkout__Container'>
        <form className='Checkout__Form'>
          <fieldset>
            <legend className='Checkout__FormHeader'>
              Billing Information
            </legend>

            <p>
              <label className='Checkout__FormLabel' htmlFor='size_1'>
                Driver Name
              </label>
              <br></br>
              <input
                className='Checkout__FormInput'
                type='text'
                name='driverName'
                value='driverName'
                placeholder=''
                onChange={props.handleChange}
                value={props.driverName}
              />
            </p>

            <p>
              <label className='Checkout__FormLabel' htmlFor='size_1'>
                Address
              </label>
              <br></br>
              <input
                className='Checkout__FormInput'
                type='text'
                name='billingAddress'
                value='billingAddress'
                placeholder=''
                onChange={props.handleChange}
                value={props.billingAddress}
              />
            </p>

            <div className='Checkout__ThreeColumns'>
              <p>
                <label className='Checkout__FormLabel' htmlFor='size_1'>
                  City
                </label>
                <br></br>
                <input
                  className='Checkout__FormInput'
                  type='text'
                  name='billingCity'
                  value='billingCity'
                  placeholder=''
                  onChange={props.handleChange}
                  value={props.billingCity}
                />
              </p>
              <p>
                <label className='Checkout__FormLabel' htmlFor='size_1'>
                  State
                </label>
                <br></br>
                <input
                  className='Checkout__FormInput'
                  type='text'
                  name='billingState'
                  value='billingState'
                  placeholder=''
                  onChange={props.handleChange}
                  value={props.billingState}
                />
              </p>
              <p>
                <label className='Checkout__FormLabel' htmlFor='size_1'>
                  Zipcode
                </label>
                <br></br>
                <input
                  className='Checkout__FormInput'
                  type='text'
                  name='billingZipcode'
                  value='billingZipcode'
                  placeholder=''
                  onChange={props.handleChange}
                  value={props.billingZipcode}
                />
              </p>
            </div>

            {/* <p>
              <label className='Checkout__FormLabel' htmlFor='size_1'>
                Contact Number
              </label>
              <br></br>
              <input
                className='Checkout__FormInput'
                type='text'
                name='driverContactNum'
                value='driverContactNum'
                placeholder=''
                onChange={props.handleChange}
                value={props.driverContactNum}
              />
            </p> */}
          </fieldset>

          <fieldset>
            <legend className='Checkout__FormHeader'>Card Information</legend>

            <p>
              <label className='Checkout__FormLabel' htmlFor='size_1'>
                Cardholder Name
              </label>
              <br></br>
              <input
                className='Checkout__FormInput'
                type='text'
                name='cardholderName'
                value='cardholderName'
                placeholder=''
                onChange={props.handleChange}
                value={props.cardholderName}
              />
            </p>

            <div className='Checkout__ThreeColumns'>
              <p>
                <label className='Checkout__FormLabel' htmlFor='size_1'>
                  Card Number
                </label>
                <br></br>
                <input
                  className='Checkout__FormInput'
                  type='number'
                  name='cardholderNumber'
                  value='cardholderNumber'
                  placeholder=''
                  onChange={props.handleChange}
                  value={props.cardholderNumber}
                />
              </p>
              <p>
                <label className='Checkout__FormLabel' htmlFor='size_1'>
                  Exp. Date (MM/YY)
                </label>
                <br></br>
                <input
                  className='Checkout__FormInput'
                  type='number'
                  name='cardExpDate'
                  value='cardExpDate'
                  placeholder=''
                  onChange={props.handleChange}
                  value={props.cardExpDate}
                />
              </p>
              <p>
                <label className='Checkout__FormLabel' htmlFor='size_1'>
                  CVV
                </label>
                <br></br>
                <input
                  className='Checkout__FormInput'
                  type='text'
                  name='cardCVV'
                  value='cardCVV'
                  placeholder=''
                  onChange={props.handleChange}
                  value={props.cardCVV}
                />
              </p>
            </div>
          </fieldset>
        </form>

        {props.listingConfirmationComp}
      </article>
    </div>
  )
}

export default PaymentInformation
