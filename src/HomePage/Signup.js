import React, { Component } from 'react'
import facebookBtn from '../assets/images/facebook-btn.png'
import googleBtn from '../assets/images/google-btn.png'
import './LoginSignup.scss'

class Signup extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onKeyUp = (event) => {
    if (event.charCode === 13) {
      this.props.handleSignUp(this.state)
    }
  }

  render() {
    return (
      <div className='login'>
        <main className='login__modal'>
          <article className='login__container'>
            <section className='login__header'>
              <div className='login__headerText'>Sign Up</div>
            </section>

            <br></br>

            <section className='login__socialmedia'>
              <img
                className='login__googleBtn'
                src={googleBtn}
                alt='google sign in button'
              />
              <br></br>
              <br></br>
              <img
                className='login__facebookBtn'
                src={facebookBtn}
                alt='continue with facebook button'
              />
            </section>

            <br></br>

            <section className='login__horizontalruler'>
              <div className='login__line'></div>
              <div className='login__line-text'>OR</div>
              <div className='login__line'></div>
            </section>

            <br></br>

            <section className='login__form'>
              <form>
                <div className='login__twocolumns'>
                  <div>
                    <label className='login__form-label'>First Name</label>
                    <input
                      onChange={this.handleChange}
                      className='login__form-input'
                      name='first_name'
                      value={this.state.first_name}
                      type='text'
                    />
                    {this.state.firstNameError}
                  </div>

                  <div>
                    <label className='login__form-label'>Last Name</label>
                    <input
                      onChange={this.handleChange}
                      className='login__form-input'
                      name='last_name'
                      value={this.state.last_name}
                      type='text'
                    />
                  </div>
                </div>

                <br></br>

                <label className='login__form-label'>Email</label>
                <input
                  onChange={this.handleChange}
                  className='login__form-input'
                  name='email'
                  value={this.state.email}
                  type='text'
                />

                <br></br>
                <br></br>

                <label className='login__form-label'>Password</label>
                <input
                  onChange={this.handleChange}
                  className='login__form-input'
                  name='password'
                  value={this.state.password}
                  type='password'
                />

                <br></br>
                <br></br>

                <label className='login__form-label'>Confirm Password</label>
                <input
                  onChange={this.handleChange}
                  className='login__form-input'
                  name='password_confirmation'
                  value={this.state.password_confirmation}
                  type='password'
                  onKeyPress={this.onKeyUp}
                />

                <br></br>

                <section className='login__checkbox-container'>
                  <div>
                    {/* <input
                    className='login__checkbox-checkbox'
                    type='checkbox'
                    name=''
                    value=''
                  />
                  <label className='login__checkbox-label'>
                    Stay signed in
                  </label> */}
                  </div>

                  {/* <div>
                  <p className='login__checkbox-password'>Forgot Password?</p>
                </div> */}
                </section>
              </form>
            </section>

            <br></br>

            <section className='login__disclosure center'>
              <p className='login__disclosure-text'>
                By clicking “Sign Up” you agree to the <br></br>Terms &
                Conditions and Privacy Policy.
              </p>
            </section>

            <br></br>

            <div className='center'>
              <section className='login__login-btn'>
                <div
                  className='login__login-text'
                  onClick={() => this.props.handleSignUp(this.state)}
                >
                  Sign Up
                </div>
              </section>

              <section className='login__register'></section>
            </div>
            {this.props.loginError && <p>Missing Field(s)</p>}

            {/* <section className='login__new center'>
            <p className='login__new-text'>
              New to ParkingRabbit? Register Now!
            </p>
          </section> */}
          </article>
        </main>
      </div>
    )
  }
}

export default Signup
