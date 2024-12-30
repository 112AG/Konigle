import React from 'react'
import './Forget.css'
import konigle from '../../assets/konigle.png'
import { Link, NavLink } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";


function Forget() {
    function onChange(value) {
        console.log("Captcha value:", value);
      }

  return (
        <div className='forget-div'>
            <div className='forget-inner-div'>
                <img className='forget-image' src={konigle} alt="" />
            </div>
            <h1 className='forget-div-head'>Password Reset</h1>
            <p className='forget-div-para'>Or <NavLink className="home-links" to="#">Contact support</NavLink></p>
            <div className='forget-form'>
                <p className='forget-form-para'>Please verify that you are not a robot. We will send the password reset code to your registered email.</p>

                <label className='forget-label' htmlFor="email">Email address</label>
                <input className='forget-inputfiled' type="email" id='email' placeholder='Register email address' />

                <ReCAPTCHA
                    className='forget-recaptcha'
                    sitekey="6LeQ6XIqAAAAAKmZ6qK0cRFb9-Gxy-g626Nl2OsX"
                    onChange={onChange}
                />

                <NavLink className="def-button-blue forget-btn" >Get Code</NavLink>

            </div>
        </div>
  )
}

export default Forget