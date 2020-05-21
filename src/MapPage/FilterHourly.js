import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { DatePicker } from 'antd'
import './Filter.scss'

class FilterHourly extends Component {

  // handleFromDateTime(value, dateString) {
  //   console.log('Selected Time: ', value)
  //   console.log('Formatted Selected Time: ', dateString)
  // }

  // handleToDateTime(value, dateString) {
  //   console.log('Selected Time: ', value)
  //   console.log('Formatted Selected Time: ', dateString)
  // }

  render() {
    return (
      <section className='Filter__Hourly'>
        {/* <form> */}
        <div className='Filter__HourlyFrom'>
          <div className='Filter__HourlyText'>From</div>
          <DatePicker
            showTime
            minuteStep={15}
            use12Hours
            placeholder='Select Date and Time'
            onChange={this.props.handleOnChangeHourlyFromDateTime}
            onOk={this.props.handleFilterHourlyFromDatetime}
          />
        </div>

        <div className='Filter__HourlyTo'>
          <div className='Filter__HourlyText'>To</div>
          <DatePicker
            showTime
            minuteStep={15}
            use12Hours
            placeholder='Select Date and Time'
            onChange={this.props.handleOnChangeHourlyToDateTime}
            onOk={this.props.handleFilterHourlyToDateTime}
          />
        </div>

        <div className='Filter__HourlySearch'>
          <button
            className='Filter__HourlySearchBtn'
            onClick={this.props.filterAndRenderHourlyDateTime}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* </form> */}
      </section>
    )
  }
}

export default FilterHourly
