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
          className={
            this.props.filterHourlyState
              ? 'Filter__HourlyOnClick Filter__HourlyOnClick--isActive'
              : 'Filter__HourlyOnClick'
          }
        >
          Hourly
        </button>

        <button
          onClick={this.props.handleRenderFilterMonthly}
          className='Filter__MonthlyOnClick'
          className={
            this.props.filterMonthlyState
              ? 'Filter__MonthlyOnClick Filter__MonthlyOnClick--isActive'
              : 'Filter__MonthlyOnClick'
          }
        >
          Monthly
        </button>

        <SearchBtn
          className='Filter__SearchBtn'
          handleSetLatLng={this.props.handleSetLatLng}
          handleSetLocationText={
            this.props.handleSetLocationText
          }
        />

        {this.props.filterHourlyState && (
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
            handleOnChangeHourlyFromDateTime={this.props.handleOnChangeHourlyFromDateTime}

            handleOnChangeHourlyToDateTime={this.props.handleOnChangeHourlyToDateTime}

            hourlyFromDateTimeState={
              this.props.hourlyFromDateTimeState
            }
            hourlyToDateTimeState={
              this.props.hourlyToDateTimeState
            }
          />
        )}

        {this.props.filterMonthlyState && <FilterMonthly />}
      </article>
    )
  }
}

export default Filter
