import React, { Component } from 'react'
import './Login.scss'
import googleSigninBtn from '../images/sign-in-google.png'
import facebookContinueBtn from '../images/continue-with-facebook-btn.png'

class Login extends Component {
  render() {
    return (
      <div className='login'>
        <main className='login__modal'>
          <article className='login__container'>
            <section className='login__header'>
              <p>Login</p>
            </section>

            <br></br>
            <br></br>

            <section className='login__socialmedia'>
              <img
                className='login__google'
                src={googleSigninBtn}
                alt='google sign in button'
              />
              <br></br>
              <br></br>
              <img
                className='login__google'
                src={facebookContinueBtn}
                alt='continue with facebook button'
              />
            </section>

            <br></br>
            <br></br>

            <section className='login__horizontalruler'>
              <div className='login__line'></div>
              <div className='login__line-text'>OR</div>
              <div className='login__line'></div>
            </section>

            <br></br>
            <br></br>

            <section className='login__form'>
              <form>
                <label className='login__form-label'>Email</label>
                <input className='login__form-input' type='text' />

                <br></br>
                <br></br>

                <label className='login__form-label'>Password</label>
                <input className='login__form-input' type='text' />

                <br></br>
                <br></br>
                <br></br>

                <section className='login__checkbox-container'>
                  <div>
                    <input
                      className='login__checkbox-checkbox'
                      type='checkbox'
                      name=''
                      value=''
                    />
                    <label className='login__checkbox-label'>
                      Stay signed in
                    </label>
                  </div>

                  <div>
                    <p className='login__checkbox-password'>Forgot Password?</p>
                  </div>
                </section>
              </form>
            </section>

            <br></br>

            <section className='login__disclosure center'>
              <p className='login__disclosure-text'>
                By clicking “Login” you agree to the <br></br>Terms &
                Conditions and Privacy Policy.
              </p>
            </section>

            <br></br>

            <div className='center'>
              <section className='login__login-btn'>
                <div className='login__login-text'>Login</div>
              </section>

              <section className='login__register'></section>
            </div>

            <br></br>

            <section className='login__new center'>
              <p className='login__new-text'>
                New to ParkingRabbit? Register Now!
              </p>
            </section>
          </article>
        </main>
      </div>
    )
  }
}

export default Login
