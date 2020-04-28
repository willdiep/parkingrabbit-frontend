import React, { Component } from 'react'
import { DatePicker } from 'antd'
import { TimePicker } from 'antd'
import './Filter.scss'

class FilterHourly extends Component {
  state = {
    fromDateTime: null,
    toDateTime: null,
  }


  handleFromDateTime(value, dateString) {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }

  handleOnOkFrom = (value) => {
    // set state then converts momentjs object to unix time
    console.log('handleOnOkFrom: ', value.unix())
    this.setState({
      fromDateTime: value.unix()
    })

  }


  handleToDateTime(value, dateString) {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }

  handleOnOkTo = (value) => {
    // set state then converts momentjs object to unix time
    console.log('handleOnOkTo: ', value.unix())
    this.setState({
      toDateTime: value.unix()
    })
  }

  render() {
    return (
      <section className='Filter__Hourly'>
        <div className='Filter__HourlyFrom'>
          FROM
          <DatePicker
            showTime
            minuteStep={15}
            use12Hours
            placeholder='Select Date and Time'
            onChange={this.handleFromDateTime}
            onOk={this.handleOnOkFrom}
          />

        </div>

        <div className='Filter__HourlyTo'>
          TO
          <DatePicker
            showTime
            minuteStep={15}
            use12Hours
            placeholder='Select Date and Time'
            onChange={this.handleToDateTime}
            onOk={this.handleOnOkTo}
          />
        </div>

        <div className='Filter__HourlySearchBtn'>
          <button>Update Search</button>
        </div>
      </section>
    )
  }
}

export default FilterHourly
