import React, { Component } from 'react'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'

const { MonthPicker } = DatePicker

class FilterMonthly extends Component {
  onChange = (date, dateString) => {
    console.log(date, dateString)
  }

  render() {
    return (
      <div>
        <MonthPicker onChange={this.onChange} placeholder='Select month' />
      </div>
    )
  }
}

export default FilterMonthly
