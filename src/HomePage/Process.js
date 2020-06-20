import React, { Component } from 'react'
import searchIcon from '../assets/images/search-icon.png'
import bookIcon from '../assets/images/book-icon.png'
import parkIcon from '../assets/images/park-icon.png'
import './Process.scss'

class Process extends Component {
  render() {
    return (
      <div>
        <article className='process'>
          <section className='process__item'>
            <img
              className='process__icon process__icon-search'
              src={searchIcon}
              alt='search icon'
            />
            <p className='process__header'>Search</p>
            <p className='process__text'>
              Find and compare pricing on convenient parking spots near your
              destination!
            </p>
          </section>
          <section className='process__item'>
            <img
              className='process__icon process__icon-book'
              src={bookIcon}
              alt='book icon'
            />
            <p className='process__header'>Book</p>
            <p className='process__text'>
              Prepay for your spot and get a parking pass instantly via text,
              email, or the app.
            </p>
          </section>
          <section className='process__item'>
            <img
              className='process__icon process__icon-park'
              src={parkIcon}
              alt='park icon'
            />
            <p className='process__header'>Park</p>
            <p className='process__text'>
              Scan or show your mobile parking pass when you arrive and you’re
              all set!
            </p>
          </section>
        </article>
      </div>
    )
  }
}

export default Process
