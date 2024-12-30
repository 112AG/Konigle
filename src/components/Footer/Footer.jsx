import React from 'react'
import './Footer.css' 
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-first'>
        <h2 className='footer-heading'>Make a website</h2>
        <NavLink target="_blank" to="https://www.youtube.com/@konigle" className=" footer-social-links"><i className="ri-youtube-fill"></i></NavLink>
        <NavLink target="_blank" to="https://www.instagram.com/konigle" className=" footer-social-links"><i className="ri-instagram-line"></i></NavLink>
        <NavLink target="_blank" to="https://x.com/konigle" className=" footer-social-links"><i className="ri-twitter-fill"></i></NavLink>
      </div>

      <div className='footer-second'>
        
          <div className='footer-links'>
            <h5 className='footer-links-heading'>PRODUCT</h5>
            <NavLink to="/help" className="footer-product-links">Help</NavLink>
            <NavLink to="/pricing" className="footer-product-links">Pricing</NavLink>
            <NavLink to="/whykonigle" className="footer-product-links">Why Konigle?</NavLink>
            <NavLink to="/app" className="footer-product-links">Integrations</NavLink>
            <NavLink to="/customers" className="footer-product-links">Testimonials</NavLink>
          </div>
          <div className="footer-links">
            <h5 className='footer-links-heading'>FEATURES</h5>
            <NavLink to="/new" className="footer-features-links">What's new</NavLink>
            <NavLink to="/createwebsite" className="footer-features-links">Website Builder</NavLink>
            <NavLink to="/website/for/linkinbio" className="footer-features-links">Link in bio</NavLink>
            <NavLink to="/website/for/ecommerce" className="footer-features-links">E-commerce</NavLink>
            <NavLink to="/website/for/blog" className="footer-features-links">Start a Blog</NavLink>
            <NavLink to="/website/for/marketing-funnels" className="footer-features-links">Funnel Builder</NavLink>
            <NavLink to="/website/for/helpdesk" className="footer-features-links">Help Desk</NavLink>
            <NavLink to="/website/seo" className="footer-features-links">Website SEO</NavLink>
            <NavLink to="/features/crm" className="footer-features-links">CRM</NavLink>          
            <NavLink to="/features/ai-tools" className="footer-features-links">AI Tools</NavLink>
            
          </div>
       
        <div className="footer-links">
        <h5 className='footer-links-heading'>RESOURCES</h5>
        <NavLink to="website/builder/demo" className="footer-resources-links">Demo</NavLink>
        <NavLink to="/blog" className="footer-resources-links">Blog</NavLink>
        <NavLink to="/commerce" className="footer-resources-links">Ecommerce Blog</NavLink>
        <NavLink className="footer-resources-links">Web development companies</NavLink>
        <NavLink to="/website/seo" className="footer-resources-links">SEO Agencies</NavLink>
        <NavLink to="/login" className="footer-resources-links">Login pages</NavLink>
        <NavLink to="/seller-tools" className="footer-features-links">Seller Tools</NavLink>
        <NavLink to="/features/all" className="footer-features-links">All Features</NavLink>
        </div>
        <div className="footer-links">
        <h5 className='footer-links-heading'>COMPANY</h5>
        <NavLink to="/about" className="footer-company-links">About</NavLink>
        <NavLink to="company/konigle" className="footer-company-links">Jobs</NavLink>
        <NavLink to="/press" className="footer-company-links">Press</NavLink>
        <NavLink to="/contact" className="footer-company-links">Contact</NavLink>
        <NavLink to="/events" className="footer-company-links">Events</NavLink>
        <NavLink to="/store" className="footer-company-links">The Konigle Store</NavLink>
        <NavLink to="/termservices" className="footer-company-links">Terms</NavLink>
        <NavLink to="/imprint" className="footer-company-links">Imprint</NavLink>
        <NavLink to="/planet" className="footer-company-links">Planet</NavLink>
      </div>
    </div>
    <div className="footer-third">
      <p className='footer-p'>© 2024 Konigle Pte Ltd, all rights reserved , Made in Singapore</p>
    </div>
    </div>
  )
}

export default Footer