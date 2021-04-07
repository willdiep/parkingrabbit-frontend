import React, { Component } from "react"
import { Link } from "react-router-dom"
import facebookBtn from "../assets/images/facebook-btn.png"
import googleBtn from "../assets/images/google-btn.png"
import "./LoginSignup.scss"

class Login extends Component {
  state = {
    email: "",
    password: "",
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onKeyUp = (event) => {
    if (event.charCode === 13) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <div className="login">
        <main className="login__modal">
          <article className="login__container">
            <section className="login__header">
              <div className="login__headerText">Login</div>
            </section>

            <br></br>

            <section className="login__socialmedia">
              <img
                className="login__googleBtn"
                src={googleBtn}
                alt="google sign in button"
              />
              <br></br>
              <br></br>
              <img
                className="login__facebookBtn"
                src={facebookBtn}
                alt="continue with facebook button"
              />
            </section>

            <br></br>

            <section className="login__horizontalruler">
              <div className="login__line"></div>
              <div className="login__line-text">OR</div>
              <div className="login__line"></div>
            </section>

            <br></br>

            <section className="login__form">
              <form>
                <label className="login__form-label">Email</label>
                <input
                  className="login__form-input"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                />

                <br></br>
                <br></br>

                <label className="login__form-label">Password</label>
                <input
                  className="login__form-input"
                  type="text"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                  onKeyPress={this.onKeyUp}
                />

                <br></br>
                <br></br>

                <section className="login__checkbox-container">
                  <div>
                    <input
                      className="login__checkbox-checkbox"
                      type="checkbox"
                      name=""
                      value=""
                    />
                    <label className="login__checkbox-label">
                      Stay signed in
                    </label>
                  </div>

                  <div>
                    <p className="login__checkbox-password">Forgot Password?</p>
                  </div>
                </section>
              </form>
            </section>

            <br></br>

            <section className="login__disclosure center">
              <p className="login__disclosure-text">
                By clicking “Login” you agree to the <br></br>Terms & Conditions
                and Privacy Policy.
              </p>
            </section>

            <br></br>

            <div className="center">
              <section className="login__login-btn">
                <div
                  className="login__login-text"
                  onClick={() => this.props.handleLogin(this.state)}
                >
                  Login
                </div>
                {this.props.loginError && <p>Wrong credentials</p>}
              </section>

              <section className="login__register"></section>
            </div>

            <br></br>

            <section className="login__new center">
              <p className="login__new-text">
                <Link to="/signup">New to ParkingRabbit? Register Now!</Link>
              </p>
            </section>
          </article>
        </main>
      </div>
    )
  }
}

export default Login
