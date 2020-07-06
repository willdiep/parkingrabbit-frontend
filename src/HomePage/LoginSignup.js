import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import heroimage from '../assets/images/hero-image.png'
// import './LoginSignup.scss'


class LoginSignup extends Component {
  render() {
    return (
      <>
        <Navbar {...this.props} className='homepage__navbar' homePage={true} />
        <article className='LoginSignup'>
          <section className='LoginSignup__Banner'>
            <figure>
              <img className='homepage__carrotcar' src={heroimage} alt='hero' />
            </figure>
          </section>
          {/* <section className='LoginSignup__Panel'>{this.props.children}</section> */}
        </article>
      </>
    )
  }
}

export default LoginSignup

