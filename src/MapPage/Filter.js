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
      <article className='Filter'>
        <button
          onClick={this.handleRenderFilterHourly}
          className='Filter__HourlyOnClick'
        >
          Hourly
        </button>

        <button
          onClick={this.handleRenderFilterMonthly}
          className='Filter__HonthlyOnClick'
        >
          Monthly
        </button>

        <SearchBtn
          className='Filter__SearchBtn'
          handleSetLatLng={this.props.handleSetLatLng}
        />

        {this.state.renderFilterHourly ? <FilterHourly /> : null}

        {this.state.renderFilterMonthly ? <FilterMonthly /> : null}
      </article>
    )
  }
}

export default Filter
