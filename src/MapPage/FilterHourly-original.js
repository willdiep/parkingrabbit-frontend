import React, { Component } from 'react'
import { DatePicker } from 'antd'
import { TimePicker } from 'antd'
import './Filter.scss'

class FilterHourly extends Component {
  constructor() {
    super()

    this.state = {
      fromTime: null,
      toTime: null,
    }
  }
  handleChangeFromDate = (date) => {
    console.log(`from ${date}`)
  }

  handleChangeFromTime = (time) => {
    console.log(`from ${time}`)
    this.setState({ fromTime: time })
  }

  handleChangeToDate = (date) => {
    console.log(`to ${date}`)
  }

  handleChangeToTime = (time) => {
    console.log(`to ${time}`)
    this.setState({ toTime: time })
  }

  render() {
    return (
      <section className='Filter__Hourly'>
        <div className='Filter__HourlyFrom'>
          FROM
          <DatePicker size='large' onChange={this.handleChangeFromDate} />
          <TimePicker
            use12Hours
            format='h:mm a'
            minuteStep={15}
            size='large'
            onChange={this.handleChangeFromTime}
          />
        </div>

        <div className='Filter__HourlyTo'>
          TO
          <DatePicker size='large' onChange={this.handleChangeToDate} />
          <TimePicker
            use12Hours
            format='h:mm a'
            minuteStep={15}
            size='large'
            onChange={this.handleChangeToTime}
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
