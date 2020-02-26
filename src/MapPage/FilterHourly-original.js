import React, { Component } from 'react'
import { DatePicker } from 'antd';
import { TimePicker } from 'antd'

class FilterHourly extends Component {
  constructor() {
    super()

    this.state = {
      fromTime: null,
      toTime: null
    }
  }
  handleChangeFromDate = date => {
    console.log(`from ${date}`)
  }

  handleChangeFromTime = time => {
    console.log(`from ${time}`)
    this.setState({ fromTime: time })
  }

  handleChangeToDate = date => {
    console.log(`to ${date}`)
  }


  handleChangeToTime = time => {
    console.log(`to ${time}`)
    this.setState({ toTime: time })
  }

  render() {
    return (
      <div className='App'>
        {/* <Demo/> */}
        FROM
        <DatePicker onChange={this.handleChangeFromDate} />

        <TimePicker
          use12Hours
          format='h:mm a'
          minuteStep={15}
          onChange={this.handleChangeFromTime}
        />
        <br></br>
        <br></br>
        TO
        <DatePicker onChange={this.handleChangeToDate} />

        <TimePicker
          use12Hours
          format='h:mm a'
          minuteStep={15}
          onChange={this.handleChangeToTime}
        />
      </div>
    )
  }
}

export default FilterHourly
