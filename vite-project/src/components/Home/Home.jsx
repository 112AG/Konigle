import React from 'react'
import './Home.css' 
import { Link, NavLink } from 'react-router-dom'
import QuestionAsk from '../QuestionAsk/QuestionAsk'

function Home() {
  return (
    <div className='home-div page-pad'>
      <h1 className='home-heading'>AI Website Builder</h1>
      <p className='home-para'>Chat and build a website using AI with free hosting and unlimited changes for 3 years.</p>
      
      <div className="home-chat-container">
            <div className="home-chat-message home-bot-message">
                Hello 👋 Good morning!
            </div>

            <div className="home-chat-message home-user-message">
                I would like to build a website
            </div>

            <div className="home-chat-message home-bot-message">
                That's a cool idea. Building a website is super easy with Konigle..You can just chat with me and your site will be ready in few minutes!
            </div>

            <div className="home-chat-message home-user-message">
                Thats awesome! How do I start?
            </div>

            <div className="home-chat-message home-bot-message">
                Start typing below to start now
            </div>
    </div>
    <div className='home-buttons-list '>
      <button className=' def-button-list-home ' >Blog Website</button>
      <button className=' def-button-list-home ' >Manufacturing business website</button>
      <button className=' def-button-list-home ' >Wedding Website</button>
      <button className=' def-button-list-home ' >Church Website</button>
      <button className=' def-button-list-home ' >Portfolio Website</button>
      <button className=' def-button-list-home ' >Restaurant Website</button>
      <button className=' def-button-list-home ' >Newsletter Website</button>

    </div>
    <div className="chat-input">
        <input type="text" className='home-input-field' placeholder="Start typing to build your website"  />
        <button className='home-send-button'>⋀</button>
    </div> 
    <p className='home-privacy-policy'>Use of Konigle is governed by our <NavLink className="home-links" to="#">Terms of Use</NavLink>. Read more about our <NavLink className="home-links" to="#">AI System</NavLink>.</p>
    <QuestionAsk/>
    </div>
  )                               
}

export default Home