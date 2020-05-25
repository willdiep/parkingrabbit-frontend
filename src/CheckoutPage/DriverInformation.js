import React from 'react'
import { useFormik } from 'formik'
import ListingConfirmation from './ListingConfirmation'
import './DriverInformation.scss'

const validate = (values) => {
  const errors = {}
  if (!values.driverName) {
    errors.driverName = 'Required'
  } else if (values.driverName.length > 15) {
    errors.driverName = 'Must be 15 characters or less'
  }

  if (!values.driverLicense) {
    errors.driverLicense = 'Required'
  } else if (values.driverLicense.length > 9) {
    errors.driverLicense = 'Must be 9 characters or less'
  }

  if (!values.driverContactNum) {
    errors.driverContactNum = 'Required'
  } else if (values.driverContactNum.length > 12) {
    errors.driverContactNum = 'Must be 12 characters or less'
  }

  if (!values.vehicleLicensePlate) {
    errors.vehicleLicensePlate = 'Required'
  } else if (values.vehicleLicensePlate.length > 12) {
    errors.vehicleLicensePlate = 'Must be 12 characters or less'
  }

  if (!values.carMake) {
    errors.carMake = 'Required'
  } else if (values.carMake.length > 12) {
    errors.carMake = 'Must be 12 characters or less'
  }

  if (!values.carYear) {
    errors.carYear = 'Required'
  } else if (values.carYear.length > 12) {
    errors.carYear = 'Must be 12 characters or less'
  }

  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }

  return errors
}

const Test = () => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const formik = useFormik({
    initialValues: {
      driverName: '',
      driverLicense: '',
      driverContactNum: '',
      vehicleLicensePlate: '',
      carMake: '',
      carYear: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <div className='DriverInformation'>
      <header className='DriverInformation__Header'>Driver Information</header>

      <article className='DriverInformation__Container'>
        <form
          onSubmit={formik.handleSubmit}
          className='DriverInformation__Form'
        >
          <legend className='DriverInformation__FormHeader'>
            Driver Information
          </legend>
          <br></br>

          <p>
            <label
              htmlFor='driverName'
              className='DriverInformation__FormLabel'
            >
              Driver Name
            </label>
            <br></br>

            <input
              className='DriverInformation__FormInput'
              id='driverName'
              name='driverName'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.driverName}
            />
            {formik.errors.driverName ? (
              <div className='DriverInformation__FormError'>
                {formik.errors.driverName}
              </div>
            ) : null}
          </p>

          <div className='DriverInformation__TwoColumns'>
            <p>
              <label
                htmlFor='driverLicense'
                className='DriverInformation__FormLabel'
              >
                Driver License
              </label>
              <br></br>

              <input
                className='DriverInformation__FormInput'
                id='driverLicense'
                name='driverLicense'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.driverLicense}
              />
              {formik.errors.driverLicense ? (
                <div className='DriverInformation__FormError'>
                  {formik.errors.driverLicense}
                </div>
              ) : null}
            </p>

            <p>
              <label
                htmlFor='driverContactNum'
                className='DriverInformation__FormLabel'
              >
                Driver Contact Number
              </label>
              <br></br>

              <input
                className='DriverInformation__FormInput'
                id='driverContactNum'
                name='driverContactNum'
                type='text'
                placeholder='888-958-0569'
                onChange={formik.handleChange}
                value={formik.values.driverContactNum}
              />
              {formik.errors.driverContactNum ? (
                <div className='DriverInformation__FormError'>
                  {formik.errors.driverContactNum}
                </div>
              ) : null}
            </p>
          </div>

          <br></br>
          <br></br>

          <legend className='DriverInformation__FormHeader'>
            Vehicle Information
          </legend>

          <br></br>

          <p>
            <label
              htmlFor='vehicleLicensePlate'
              className='DriverInformation__FormLabel'
            >
              Vehicle License Plate
            </label>
            <br></br>

            <input
              className='DriverInformation__FormInput'
              id='vehicleLicensePlate'
              name='vehicleLicensePlate'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.vehicleLicensePlate}
            />
            {formik.errors.vehicleLicensePlate ? (
              <div className='DriverInformation__FormError'>
                {formik.errors.vehicleLicensePlate}
              </div>
            ) : null}
          </p>

          <div className='DriverInformation__TwoColumns'>
            <p>
              <label
                htmlFor='driverLicense'
                className='DriverInformation__FormLabel'
              >
                Car Make
              </label>
              <br></br>

              <input
                className='DriverInformation__FormInput'
                id='carMake'
                name='carMake'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.carMake}
              />
              {formik.errors.carMake ? (
                <div className='DriverInformation__FormError'>
                  {formik.errors.carMake}
                </div>
              ) : null}
            </p>

            <p>
              <label
                htmlFor='driverContactNum'
                className='DriverInformation__FormLabel'
              >
                Car Year
              </label>
              <br></br>

              <input
                className='DriverInformation__FormInput'
                id='carYear'
                name='carYear'
                type='text'
                onChange={formik.handleChange}
                value={formik.values.carYear}
              />
              {formik.errors.carYear ? (
                <div className='DriverInformation__FormError'>
                  {formik.errors.carYear}
                </div>
              ) : null}
            </p>
          </div>

          {/* <button type='submit'>Submit</button> */}
        </form>

        <ListingConfirmation />
      </article>
    </div>
  )
}

export default Test
