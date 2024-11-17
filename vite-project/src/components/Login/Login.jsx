import React from 'react'
import './Login.css'
import konigle from '../../assets/konigle.png'
import { Link, NavLink } from 'react-router-dom'


function Login() {
  return (
    <div className='login-div'>
      <div className='login-inner-div'>
        <img className='login-image' src={konigle} alt="" />
      </div>
      <h1 className='login-div-head'>Log in to Konigle</h1>
      <p className='login-div-para'>Or <NavLink className="home-links" to="#">Contact support</NavLink></p>
      <div className='login-form'>
        <label className='login-label' htmlFor="emailAddress">Email address</label>
        <input className='login-inputfiled' type="email" name="Email" id="emailAddress" placeholder='Register email address' />

        <label className='login-label' htmlFor="password">Password</label>
        <input className='login-inputfiled' type="password" placeholder='password'/>
        <NavLink className="def-button-blue login-btn" >Next</NavLink>
        <NavLink to="/forgetpassword" className="login-forget-button" >Forget Password?</NavLink>
      </div>
    </div>
  )
}

export default Login