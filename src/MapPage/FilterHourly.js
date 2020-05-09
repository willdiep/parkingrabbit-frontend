import React, { Component } from 'react'
import { DatePicker } from 'antd'
import './Filter.scss'

class FilterHourly extends Component {
  // state = {
  //   filterHoulyFromDateTime: null,
  //   filterHourlyToDateTime: null,
  // }

  handleFromDateTime(value, dateString) {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }

  // handleOnOkFrom = (value) => {
  //   // set state then converts momentjs object to
  //   //  unix time in milliseconds by using valueOf()
  //   console.log('handleOnOkFrom: ', value.valueOf())
  //   this.setState({
  //     filterHoulyFromDateTime: value.valueOf(),
  //   })
  // }

  handleToDateTime(value, dateString) {
    console.log('Selected Time: ', value)
    console.log('Formatted Selected Time: ', dateString)
  }

  // handleOnOkTo = (value) => {
  //   // set state then converts momentjs object to unix time
  //   console.log('handleOnOkTo: ', value.valueOf())
  //   this.setState({
  //     filterHourlyToDateTime: value.valueOf(),
  //   })
  // }

  render() {
    return (
      <section className='Filter__Hourly'>
        {/* <form> */}
        <div className='Filter__HourlyFrom'>
          FROM
          <DatePicker
            showTime
            minuteStep={15}
            use12Hours
            placeholder='Select Date and Time'
            // onChange={this.handleFromDateTime}
            onOk={this.props.handleFilterHourlyFromDatetime}
          />
        </div>

        <div className='Filter__HourlyTo'>
          TO
          <DatePicker
            showTime
            minuteStep={15}
            use12Hours
            placeholder='Select Date and Time'
            // onChange={this.handleToDateTime}
            onOk={this.props.handleFilterHourlyToDateTime}
          />
        </div>

        <div className='Filter__HourlySearch'>
          <button
            className='Filter__HourlySearchBtn'
            onClick={this.props.filterAndRenderHourlyDateTime}
          >
            Update Search
          </button>
        </div>
        {/* </form> */}
      </section>
    )
  }
}

export default FilterHourly
