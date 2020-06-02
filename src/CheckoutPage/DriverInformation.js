import React from 'react'
import './CheckoutPage.scss'

const DriverInformation = (props) => {
  return (
    <div className='Checkout'>
      <header className='Checkout__Header'>Driver Information</header>

      <article className='Checkout__Container'>
        <form
          // onSubmit={props.handleSubmit}
          className='Checkout__Form'
        >
          <legend className='Checkout__FormHeader'>
            Driver Information
          </legend>
          <br></br>

          <p>
            <label
              htmlFor='driverName'
              className='Checkout__FormLabel'
            >
              Driver Name
            </label>
            <br></br>

            <input
              className='Checkout__FormInput'
              id='driverName'
              name='driverName'
              type='text'
              onChange={props.handleChange}
              value={props.driverName}
            />
            {/* {formik.errors.driverName ? (
              <div className='Checkout__FormError'>
                {formik.errors.driverName}
              </div>
            ) : null} */}
          </p>

          <div className='Checkout__TwoColumns'>
            <p>
              <label
                htmlFor='driverLicense'
                className='Checkout__FormLabel'
              >
                Driver License
              </label>
              <br></br>

              <input
                className='Checkout__FormInput'
                id='driverLicense'
                name='driverLicense'
                type='text'
                onChange={props.handleChange}
                value={props.driverLicense}
              />
              {/* {formik.errors.driverLicense ? (
                <div className='Checkout__FormError'>
                  {formik.errors.driverLicense}
                </div>
              ) : null} */}
            </p>

            <p>
              <label
                htmlFor='driverContactNum'
                className='Checkout__FormLabel'
              >
                Driver Contact Number
              </label>
              <br></br>

              <input
                className='Checkout__FormInput'
                id='driverContactNum'
                name='driverContactNum'
                type='text'
                placeholder='888-958-0569'
                onChange={props.handleChange}
                value={props.driverContactNum}
              />
              {/* {formik.errors.driverContactNum ? (
                <div className='Checkout__FormError'>
                  {formik.errors.driverContactNum}
                </div>
              ) : null} */}
            </p>
          </div>

          <br></br>
          <br></br>

          <legend className='Checkout__FormHeader'>
            Vehicle Information
          </legend>

          <br></br>

          <p>
            <label
              htmlFor='vehicleLicensePlate'
              className='Checkout__FormLabel'
            >
              Vehicle License Plate
            </label>
            <br></br>

            <input
              className='Checkout__FormInput'
              id='vehicleLicensePlate'
              name='vehicleLicensePlate'
              type='text'
              onChange={props.handleChange}
              value={props.vehicleLicensePlate}
            />
            {/* {formik.errors.vehicleLicensePlate ? (
              <div className='Checkout__FormError'>
                {formik.errors.vehicleLicensePlate}
              </div>
            ) : null} */}
          </p>

          <div className='Checkout__TwoColumns'>
            <p>
              <label
                htmlFor='driverLicense'
                className='Checkout__FormLabel'
              >
                Car Make
              </label>
              <br></br>

              <input
                className='Checkout__FormInput'
                id='carMake'
                name='carMake'
                type='text'
                onChange={props.handleChange}
                value={props.carMake}
              />
              {/* {formik.errors.carMake ? (
                <div className='Checkout__FormError'>
                  {formik.errors.carMake}
                </div>
              ) : null} */}
            </p>

            <p>
              <label
                htmlFor='driverContactNum'
                className='Checkout__FormLabel'
              >
                Car Year
              </label>
              <br></br>

              <input
                className='Checkout__FormInput'
                id='carYear'
                name='carYear'
                type='text'
                onChange={props.handleChange}
                value={props.carYear}
              />
              {/* {formik.errors.carYear ? (
                <div className='Checkout__FormError'>
                  {formik.errors.carYear}
                </div>
              ) : null} */}
            </p>
          </div>

          {/* <button type='submit'>Submit</button> */}
        </form>

        {props.listingConfirmationComp}
      </article>
    </div>
  )
}

export default DriverInformation
