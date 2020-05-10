import React, { Component } from 'react'
import FilterHourly from './FilterHourly'
import FilterMonthly from './FilterMonthly'
import SearchBtn from '../SearchBtn/SearchBtn'
import './Filter.scss'

class Filter extends Component {
  // state = {
  //   renderFilterHourly: false,
  //   renderFilterMonthly: false,
  // }

  // handleRenderFilterHourly = (e) => {
  //   this.setState({
  //     renderFilterHourly: true,
  //     renderFilterMonthly: false,
  //   })
  // }

  // handleRenderFilterMonthly = (e) => {
  //   this.setState({
  //     renderFilterHourly: false,
  //     renderFilterMonthly: true,
  //   })
  // }

  render() {
    return (
      <article className='Filter'>
        <button
          onClick={this.props.handleRenderFilterHourly}
          className='Filter__HourlyOnClick'
        >
          Hourly
        </button>

        <button
          onClick={this.props.handleRenderFilterMonthly}
          className='Filter__MonthlyOnClick'
        >
          Monthly
        </button>

        <SearchBtn
          className='Filter__SearchBtn'
          handleSetLatLng={this.props.handleSetLatLng}
        />

        {this.props.filterHourlyState ? (
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

        {this.props.filterMonthlyState ? <FilterMonthly /> : null}
        
      </article>
    )
  }
}

export default Filter
