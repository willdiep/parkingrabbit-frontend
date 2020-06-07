import React from 'react'
import './BookingConfirmation.scss'

const BookingConfirmation = (props) => {
  return (
    <div className='BookingConfirmation'>
      <header className='BookingConfirmation__Header'>
        Booking Confirmation
      </header>
      <article className='BookingConfirmation__Container'>
        <section className='BookingConfirmation__Summary'>
          <header className='BookingConfirmation__SummaryHeader'>
            Thank you for booking your parking spot with ParkingRabbit!
          </header>

          <br></br>

          <header className='BookingConfirmation__SummarySubheader'>
            Please take a moment to confirm if all your information is correct.
          </header>

          <br></br>
          
          <div className='BookingConfirmation__Divider'></div>

          <br></br>
          <br></br>

          <article className='BookingConfirmation__TwoColumns'>
            <section>
              <div>
                <div className='BookingConfirmation__Title'>
                  Parking Location
                </div>

                <div className='BookingConfirmation__Input'></div>
              </div>

              <div>
                <div className='BookingConfirmation__Title'>
                  Parking Date &amp; Time
                </div>
                <div className='BookingConfirmation__Input'></div>
              </div>
            </section>

            <section>
              <div>
                <div className='BookingConfirmation__Title'>Payment</div>
                <div className='BookingConfirmation__Input'>
                  <div>{props.cardholderName}</div>
                  <div>{props.cardholderNumber}</div>
                  <div>{props.cardExpDate}</div>
                  <div>{props.cardCVV}</div>
                </div>
              </div>

              <br></br>

              <div>
                <div className='BookingConfirmation__Title'>
                  Driver Information
                </div>
                <div className='BookingConfirmation__Input'>
                  <div>{props.driverName}</div>
                  <div>{props.driverAddress}</div>
                  <div>
                    {props.driverCity}, {props.driverState}{' '}
                    {props.driverZipcode}
                  </div>
                  <div>{props.driverContactNum}</div>
                </div>
              </div>
            </section>
          </article>
        </section>

        <aside>{props.listingConfirmationComp}</aside>
      </article>
    </div>
  )
}

export default BookingConfirmation
