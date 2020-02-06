import React, { Component } from 'react'
import './Login.scss'
import googleSigninBtn from '../images/sign-in-google.png'
import facebookContinueBtn from '../images/continue-with-facebook-btn.png'

class Login extends Component {
  constructor() {
    super()
  }

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
              <img className='login__google' src={googleSigninBtn} />
              <br></br>
              <br></br>
              <img className='login__google' src={facebookContinueBtn} />
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
                <label>Email</label>
                <br></br>
                <input type='text'></input>
                
                <br></br>
                <br></br>

                <label>Password</label>
                <br></br>
                <input type='text'></input>
              </form>
            </section>

            <section className='login__disclosure'></section>

            <section className='login__register'></section>
          </article>
        </main>
      </div>
    )
  }
}

export default Login
