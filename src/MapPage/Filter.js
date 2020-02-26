import React, { Component } from 'react'
import FilterMonthly from './FilterMonthly'
import SearchBtn from '../SearchBtn/SearchBtn'
import './Filter.scss'
import FilterHourly from './FilterHourly'

class Filter extends Component {
  constructor() {
    super()

    this.state = {
      renderFilterHourly: false,
      renderFilterMonthly: false
    }
  }

  handleRenderFilterHourly = e => {
    this.setState({
      renderFilterHourly: true,
      renderFilterMonthly: false
    })
  }

  handleRenderFilterMonthly = e => {
    this.setState({
      renderFilterHourly: false,
      renderFilterMonthly: true
    })
  }

  render() {
    return (
      <div className='Filter'>
        <button
          onClick={this.handleRenderFilterHourly}
          className='Filter__hourlyOnClick'
        >
          Hourly
        </button>

        <button
          onClick={this.handleRenderFilterMonthly}
          className='Filter__monthlyOnClick'
        >
          Monthly
        </button>

        <SearchBtn
          className='Filter__searchBtn'
          handleSetLatLng={this.props.handleSetLatLng}
        />
        {/* 
        <h4 className='Filter__monthlyStartingHeader'>
          Monthly Parking Starting
        </h4> */}

        {this.state.renderFilterHourly ? <FilterHourly /> : null}

        {this.state.renderFilterMonthly ? <FilterMonthly /> : null}
      </div>
    )
  }
}

export default Filter
