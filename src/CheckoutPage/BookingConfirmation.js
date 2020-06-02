import React from 'react'
import './BookingConfirmation.scss'

const BookingConfirmation = (props) => {
  return (
    <div className='BookingConfirmation'>
      <legend>Booking Confirmation</legend>
      <article className='BookingConfirmation__Container'>
        <section className='BookingConfirmation__Summary'>
          <div className=''>
            <p>Thank you for booking your parking spot with ParkingRabbit!</p>

            <p>
              Please take a moment to confirm if all your information is
              correct.
            </p>
          </div>
        </section>

        {props.listingConfirmationComp}
      </article>
    </div>
  )
}

export default BookingConfirmation
