import React, { Component } from 'react'
import FilterHourly from './FilterHourly'
import FilterMonthly from './FilterMonthly'
import SearchBtn from '../SearchBtn/SearchBtn'
import './Filter.scss'

class Filter extends Component {
  constructor() {
    super()

    this.state = {
      renderFilterHourly: false,
      renderFilterMonthly: false,
    }
  }

  handleRenderFilterHourly = (e) => {
    this.setState({
      renderFilterHourly: true,
      renderFilterMonthly: false,
    })
  }

  handleRenderFilterMonthly = (e) => {
    this.setState({
      renderFilterHourly: false,
      renderFilterMonthly: true,
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
          className='Filter__MonthlyOnClick'
        >
          Monthly
        </button>

        <SearchBtn
          className='Filter__SearchBtn'
          handleSetLatLng={this.props.handleSetLatLng}
        />

        {this.state.renderFilterHourly ? (
          <FilterHourly
            handleFilterHourlyFromDatetime={
              this.props.handleFilterHourlyFromDatetime
            }
            handleFilterHourlyToDateTime={
              this.props.handleFilterHourlyToDateTime
            }
            filterAndRenderHourlyDateTime={
              this.props.filterAndRenderHourlyDateTime
            }
          />
        ) : null}

        {this.state.renderFilterMonthly ? <FilterMonthly /> : null}
      </article>
    )
  }
}

export default Filter
