import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import ListingConfirmation from './ListingConfirmation'
import './DriverInformation.scss'

class DriverInformation extends Component {
  constructor() {
    super()
    this.state = {
      // driverName: null,
      driverLicense: null,
      driverContactNum: null,
      vehicleLicensePlate: null,
      carMake: null,
      year: null,
    }
  }

  handleInput = (e) => {
    const { name, value } = e.target
    console.log(e.target.value)
    this.setState({
      // [e.target.name]: e.target.value,
      [name]: value,
    })
  }

  onFinish = (values) => {
    console.log('Success:', values)
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  render() {
    return (
      <div className='DriverInformation'>
        <header className='DriverInformation__Header'>
          Driver Information
        </header>
        <article className='DriverInformation__Container'>
          <Form
            name='basic'
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            className='DriverInformation__Form'
          >
            <fieldset>
              <legend className='DriverInformation__FormHeader'>
                Driver Information
              </legend>

              <p>
                <label
                  className='DriverInformation__FormDriverNameLabel DriverInformation__FormLabel'
                  htmlFor='size_1'
                >
                  Driver Name
                </label>
                <br></br>
                <Form.Item
                  label='Driver Name'
                  name='name '
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username',
                    },
                  ]}
                >
                  <Input
                    className='DriverInformation__FormDriverNameInput'
                    type='text'
                    name='driverName'
                    // value={this.state.driverName}
                    value={this.props.driverName}
                    // onChange={this.handleInput}
                    onChange={() => this.props.handleDriverName}
                    placeholder=''
                  />
                </Form.Item>
              </p>

              <div className='DriverInformation__FormDriverInfo'>
                <p>
                  <label
                    className='DriverInformation__FormDriverLicenseLabel DriverInformation__FormLabel'
                    htmlFor='size_1'
                  >
                    Driver License
                  </label>
                  <br></br>
                  <input
                    className='DriverInformation__FormDriverLicenseInput'
                    type='text'
                    name='driverLicense'
                    value={this.state.driverLicense}
                    onChange={this.handleInput}
                    placeholder=''
                  />
                </p>

                <p>
                  <label
                    className='DriverInformation__FormDriverContactNumLabel'
                    htmlFor='size_1'
                  >
                    Driver Contact Number
                  </label>
                  <br></br>
                  <input
                    className='DriverInformation__FormDriverContactNumInput DriverInformation__FormInput'
                    type='text'
                    name='driverContactNum'
                    value={this.state.driverContactNum}
                    onChange={this.handleInput}
                    placeholder=''
                  />
                </p>
              </div>
            </fieldset>

            <fieldset>
              <legend>Vehicle Information</legend>
              <p>
                <label
                  className='DriverInformation__FormVehicleInfoLabel DriverInformation__FormLabel'
                  htmlFor='size_1'
                >
                  Vehicle License Plate
                </label>
                <br></br>
                <input
                  className='DriverInformation__FormVehicleInfoInput'
                  type='text'
                  name='vehicleLicensePlate'
                  value={this.state.vehicleLicensePlate}
                  onChange={this.handleInput}
                  placeholder=''
                />
              </p>

              <div className='DriverInformation__FormCarInfo'>
                <p>
                  <label
                    className='DriverInformation__FormCarMakeLabel DriverInformation__FormLabel'
                    htmlFor='size_1'
                  >
                    Car Make
                  </label>
                  <br></br>
                  <input
                    className='DriverInformation__FormCarMakeInput'
                    type='text'
                    name='carMake'
                    value={this.state.carMake}
                    onChange={this.handleInput}
                    placeholder=''
                  />
                </p>

                <p>
                  <label
                    className='DriverInformation__FormYearLabel'
                    htmlFor='size_1'
                  >
                    Year
                  </label>
                  <br></br>
                  <input
                    className='DriverInformation__FormYearInput'
                    type='text'
                    name='year'
                    value={this.state.year}
                    onChange={this.handleInput}
                    placeholder=''
                  />
                </p>
              </div>
            </fieldset>
          </Form>

          <ListingConfirmation />
        </article>
      </div>
    )
  }
}

// DriverInformation.PropTypes = {
//   driverName: PropTypes.string,
// }

export default DriverInformation
