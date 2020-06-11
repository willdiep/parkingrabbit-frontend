import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import './BookingConfirmation.scss'

const BookingConfirmation = (props) => {
  const listingImg = localStorage.getItem('listingImg')
  const listingAddress = localStorage.getItem('listingAddress')
  const listingZipcode = localStorage.getItem('listingZipcode')

  const listingPrice = localStorage.getItem('listingPrice')
  const totalPrice = (+listingPrice + 0.5).toFixed(2)

  const hourlyFromDateTime = localStorage.getItem('hourlyFromDateTimeState')
  const hourlyToDateTime = localStorage.getItem('hourlyToDateTimeState')

  const hourlyFromDateTimeFormat = hourlyFromDateTime

  const hourlyToDateTimeFormat = hourlyToDateTime

console.log('hourlyFromDateTime', hourlyFromDateTime)

  return (
    <div className='BookingConfirmation'>
      <header className='BookingConfirmation__Header text-bold'>
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
              <div className='BookingConfirmation__Title text-bold'>
                Driver Information
              </div>
              <br></br>
              <div className='BookingConfirmation__Input'>
                <div>{props.driverName}</div>
                <div>{props.billingAddress}</div>
                <div>
                  {props.billingCity}, {props.billingState} {props.billingZipcode}
                </div>
                <div>{props.driverContactNum}</div>
              </div>
            </section>

            <section>
              <div>
                <div className='BookingConfirmation__Title text-bold'>
                  Payment Information
                </div>
                <br></br>
                <div className='BookingConfirmation__Input'>
                  <div>{props.cardholderName}</div>
                  <div>{props.cardholderNumber}</div>
                  <div>{props.cardExpDate}</div>
                  <div>{props.cardCVV}</div>
                </div>
              </div>

              <br></br>

              <div></div>
            </section>
          </article>

          <br></br>
          <br></br>

        </section>

        <aside>
          <img
            className='BookingConfirmation__ListingImg'
            src={listingImg}
            alt='parking listing'
          />

          <section className='BookingConfirmation__Timeline'>
            <div>
              <div className='BookingConfirmation__EnterAfter'>Enter After</div>
              <div>{hourlyFromDateTimeFormat}</div>
              {/* <div>Sat, Jun 6,</div>
              <div>6:00 PM</div> */}
            </div>

            <span className='BookingConfirmation__Arrow'>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </span>

            <div className='BookingConfirmation__ExitBeforeContainer'>
              <div className='BookingConfirmation__ExitBefore'>Exit Before</div>
              <div>{hourlyToDateTimeFormat}</div>

              {/* <div>Sun, Jun 7,</div>
              <div>12:00 AM</div> */}
            </div>
          </section>

          <div className='BookingConfirmation__Address'>
            {listingAddress}
            <br></br>
            San Francisco, CA {listingZipcode}
            <br></br>
            <br></br>
          <p className='BookingConfirmation__Divider'></p>
          </div>


          <article className='BookingConfirmation__TotalPrice'>
            <section className='BookingConfirmation__Flex'>
              <p className='BookingConfirmation__'>Subtotal:</p>
              <p className='BookingConfirmation__'>${listingPrice}.00</p>
            </section>

            <section className='BookingConfirmation__Flex'>
              <p className='BookingConfirmation__'>Service Fee:</p>
              <p className='BookingConfirmation__'>$0.50</p>
            </section>

            <p className='BookingConfirmation__DividerTotal'></p>

            <section className='BookingConfirmation__Flex'>
              <p className='BookingConfirmation__Total text-bold'>Total:</p>
              <p className='BookingConfirmation__ text-bold'>${totalPrice}</p>
            </section>
          </article>
        </aside>
      </article>
    </div>
  )
}

export default BookingConfirmation
