import React, { Component } from 'react'

class Test extends Component {
  // state = { value: '' }

  // handleChange = (event) => {
  //   this.setState({ value: event.target.value })
  // }
  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            // value={this.state.value}
            // onChange={this.handleChange}

            value={this.props.valueState}
            onChange={() => this.props.handleChange}
          />{' '}
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default Test
