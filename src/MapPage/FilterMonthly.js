import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'
import './Filter.scss'

const { MonthPicker } = DatePicker

class FilterMonthly extends Component {
  state = {
    monthInput: null,
  }
  handleMonth = (date, dateString) => {
    console.log('Formatted Selected Time: ', dateString)
    console.log(date.month() + 1)
  }

  render() {
    return (
      <div className='Filter__Monthly'>
        <div className='Filter__MonthlyFrom'>
          <div className='Filter__MonthlyText'>From</div>
          <MonthPicker onChange={this.handleMonth} placeholder='Select month' />
        </div>

        <div className='Filter__MonthlyTo'>
          <div className='Filter__MonthlyText'>To</div>
          <MonthPicker onChange={this.handleMonth} placeholder='Select month' />
        </div>

        <div className='Filter__MonthlySearch'>
          <button
            className='Filter__MonthlySearchBtn'
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    )
  }
}

export default FilterMonthly
