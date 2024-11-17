import React from 'react'
import './Help.css'
import helpImageOne from '../../assets/helpImageOne.png'
import helpImageTwo from '../../assets/helpImageTwo.png'
import helpImageThree from '../../assets/helpImageThree.png'
import { NavLink } from 'react-router-dom'


function Help() {
  return (
    <div className='help-main'>
        <div className="help-firstPage">
        <h1 className='help-heading'>Hi! Welcome to Konigle Help Centre.</h1>
        <div className="help-mainInput">
        <input className='help-input' placeholder='Type your question here' type="text" />
        <button className='help-button '>Search</button>
        </div>
        <p className='help-para'>We are a help centre for SEO-focused website builders, Shopify sellers, and Shopee sellers to ensure you have all the help needed to get the most out of Konigle.</p>
        </div>

        <div className="help-secondPage">
          <h1 className='help-headingTwo'>Categories</h1>
          <div className="help-cards-categories">
            <div className="help-card">
              <div className="help-card-image">
                <img src={helpImageOne} alt="Website[=-`3`12345] Builder Guide" />
              </div>
              <div className="help-card-content">
                <h2 className="help-card-title">Website Builder</h2>
                <p className="help-card-description">
                  Guides for SEO-focused website owners and agencies. Get all the help needed to build a website and organically build an online brand here.
                </p>
                <button className="help-card-btn">Read Guides</button>
              </div>
            </div>

            <div className="help-card">
              <div className="help-card-image">
                <img src={helpImageTwo} alt="Website Builder Guide" />
              </div>
              <div className="help-card-content">
                <h2 className="help-card-title">Website Builder</h2>
                <p className="help-card-description">
                  Guides for SEO-focused website owners and agencies. Get all the help needed to build a website and organically build an online brand here.
                </p>
                <button className="help-card-btn">Read Guides</button>
              </div>
            </div>

            <div className="help-card">
              <div className="help-card-image">
                <img src={helpImageThree} alt="Website Builder Guide" />
              </div>
              <div className="help-card-content">
                <h2 className="help-card-title">Website Builder</h2>
                <p className="help-card-description">
                  Guides for SEO-focused website owners and agencies. Get all the help needed to build a website and organically build an online brand here.
                </p>
                <button className="help-card-btn">Read Guides</button>
              </div>
            </div>
          </div>
        </div>

        <div className="help-video-links">
          <iframe 
              className='help-video' 
              src="https://www.youtube-nocookie.com/embed/C30qGhowvWw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
          ></iframe>
            <div className="help-demo-content">
            <h3 className='help-headingThree'>Watch the full demo</h3>
            <div className="help-demo-para ">Find more insightful video guides at KonigleTV.</div>
            <NavLink className="help-channel-link">Visit channel</NavLink>
          </div>
        </div>

        <div className='help-feature-section'>
          <h4 className='help-feature-heading'>Featured Articles</h4>
          <p className='help-feature-para'>Here are some commonly asked questions</p>
          <hr  className='horizontal-line'/>
          <div className="help-feature-cards">
           <div className="all-cards">
            <div className='feature-card'>
                <h1 className="help-feature-card">How to create an <span className='help-feature-card-blue'>website components</span> with the Component Builder?</h1>
              </div>
              <h6 className='help-feature-card-para'>How to create an website components with <br /> the Component Builder?</h6>
            </div>
          
          <div className="all-cards">
            <div className='feature-card'>
                <h1 className="help-feature-card">List of <span className='help-feature-card-blue'>All components available</span> on Konigle</h1>
              </div>
              <h6 className='help-feature-card-para'>List of All components available on Konigle</h6>
            </div>

            <div className="all-cards">
            <div className='feature-card'>
                <h1 className="help-feature-card">How to create a website <span className='help-feature-card-blue'>Glossary</span>?</h1>
              </div>
              <h6 className='help-feature-card-para'>How to create a website Glossary?</h6>
            </div>
        </div>
        <p className="feature-btm-heading">This is an evergreen article that gets updated whenever new website components are added.</p>
        </div>

        <div className='help-latest-section'>
          <h4 className='help-feature-heading'>Latest Articles</h4>
          <p className='help-feature-para'>Here are some commonly asked questions</p>
          <hr  className='horizontal-line'/>
          <div className="help-feature-cards">
           <div className="all-cards">
            <div className='feature-card'>
                <h1 className="help-feature-card">How to create an <span className='help-feature-card-blue'>FAQ</span> page?</h1>
              </div>
              <h6 className='help-feature-card-para'>How to creaate an FAQ page ?</h6>
            </div>
          
          <div className="all-cards">
            <div className='feature-card'>
                <h1 className="help-feature-card">How to find <span className='help-feature-card-blue'>News</span> for yourblogs?</h1>
              </div>
              <h6 className='help-feature-card-para'>How to find news for your blogs?</h6>
            </div>

            <div className="all-cards">
            <div className='feature-card'>
                <h1 className="help-feature-card">How to add a <span className='help-feature-card-blue'>Hero Section</span> on your website?</h1>
              </div>
              <h6 className='help-feature-card-para'>How to add a hero section on your website?</h6>
            </div>
        </div>
        </div>

        <div className="help-questionSection">
          <div className="questionOne">
          <h1 className='help-questionSection-heading'>Don't find your question here?</h1>
          <p className='help-questionSection-para'>Let us know and we will address them!</p>
          </div>
          <NavLink className="help-questionSection-btn">Contact Us</NavLink>
        </div>
       </div>
  )
}

export default Help