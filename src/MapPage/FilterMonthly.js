import React, { Component } from 'react'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'
import './Filter.scss'


const { MonthPicker } = DatePicker

class FilterMonthly extends Component {

  state = {
    monthInput: null
  }
  handleMonth = (date, dateString) => {
    console.log('Formatted Selected Time: ', dateString)
    console.log(date.month() + 1)

  }

  render() {
    return (
      <div className='Filter__Monthly'>
        <MonthPicker size='large' onChange={this.handleMonth} placeholder='Select month' />
      </div>
    )
  }
}

export default FilterMonthly
