import React from 'react'
import './HelpFooter.css'
import { NavLink } from 'react-router-dom'

function HelpFooter() {
  return (
    <footer className='helpFooter'>
      <div className='helpFooter-container'>
        <div className='helpFooter-top'>
          <h1 className="helpFooter-heading">Konigle</h1>
          <p className="helpFooter-para">A help centre for SEO-focused website builders, Shopify sellers, and Shopee sellers to ensure everyone gets the most out of Konigle.</p>
        </div>
        
        <div className="helpFooter-links-container">
          <ul className="helpFooter-link-group">
            <li><NavLink className="helpFooter-navlink-group"  to="/createwebsite">Website Builder</NavLink></li>
            <li><NavLink className="helpFooter-navlink-group" to="/shopify">Shopify App</NavLink></li>
            <li><NavLink className="helpFooter-navlink-group" to="/shopee">Shopee</NavLink></li>
          </ul>
          <ul className="helpFooter-link-group">
            <li><NavLink className="helpFooter-navlink-group" to="/pricing">Pricing</NavLink></li>
            <li><NavLink className="helpFooter-navlink-group" to="/blog">Blog</NavLink></li>
            <li><NavLink className="helpFooter-navlink-group" to="/faq">FAQs</NavLink></li>
          </ul>
          <ul className="helpFooter-link-group">
            <li><NavLink className="helpFooter-navlink-group" to="/privacypolicy">Privacy Policy</NavLink></li>
            <li><NavLink className="helpFooter-navlink-group" to="/termservices">Terms of Service</NavLink></li>
          </ul>
        </div>
        
        <div className="helpFooter-bottom">
          <p>© 2024 Konigle Help Desk. All rights reserved.</p>
          <p>⚡Built with Konigle • <NavLink className="helpFooter-navlink-group" to="#">Site Map</NavLink></p>
        </div>
      </div>
    </footer>
  )
}

export default HelpFooter