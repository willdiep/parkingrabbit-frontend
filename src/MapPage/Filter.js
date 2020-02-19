import React, { Component } from 'react';
import FilterMonthly from './FilterMonthly'
import './Filter.scss'

class Filter extends Component {

  render() {
    return (
      <div className='Filter'>
        <h4>Hourly</h4>
        <h4>Monthly</h4>
        <FilterMonthly />
      </div>
    )
  }
}

export default Filter