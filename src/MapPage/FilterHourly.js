import React, { Component } from 'react'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { DatePicker } from 'antd'
import './Filter.scss'

const isToday = require('dayjs/plugin/isToday')
dayjs.extend(isToday)

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
    // const hourlyFromDateTimeStateProp = this.props.hourlyFromDateTimeState
    // const hourlyToDateTimeProp = this.props.hourlyToDateTimeState
    // const currentDate = hourlyFromDateTimeStateProp.format('M/D/YYYY H:mm A')
    // const datePlus4Hours = hourlyToDateTimeProp.format('M/D/YYYY H:mm A')
   
    const currentDate = dayjs().format('M/D/YYYY H:mm A')
    const datePlus4Hours = dayjs().add(4, 'hour').format('M/D/YYYY H:mm A')

    // const dateFormat = 'YYYY/MM/DD';

    return (
      <section className='Filter__Hourly'>
        {/* <form> */}
        <div className='Filter__HourlyFrom'>
          <div className='Filter__HourlyText'>From</div>
          <DatePicker
            // defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat}
            format={'M/D/YYYY hh:mm A'}
            size='large'
            showTime
            minuteStep={15}
            use12Hours
            placeholder={currentDate}
            onChange={this.props.handleOnChangeHourlyFromDateTime}
            onOk={this.props.handleFilterHourlyFromDatetime}
          />
        </div>

        <div className='Filter__HourlyTo'>
          <div className='Filter__HourlyText'>To</div>
          <DatePicker
            size='large'
            showTime
            format={'M/D/YYYY hh:mm A'}
            minuteStep={15}
            use12Hours
            placeholder={datePlus4Hours}
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
