import React, { Component } from 'react'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'

const { MonthPicker } = DatePicker

class FilterMonthly extends Component {

  state = {
    monthInput: null
  }
  handleMonth = (date, dateString) => {
    console.log('Formatted Selected Time: ', dateString)
    console.log(date.unix())

  }

  render() {
    return (
      <div>
        <MonthPicker onChange={this.handleMonth} placeholder='Select month' />
      </div>
    )
  }
}

export default FilterMonthly
