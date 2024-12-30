import React from 'react';
import './ThirdHeader.css';
import { NavLink } from 'react-router-dom';

const ThirdHeader = () => {
  return (
    <div className="thirdheader-container">
      <nav className="thirdheader-navbar">
        <div className="thirdheader-logo">
          <NavLink className="thirdheader-linkOne" to="/">konigle</NavLink>
        </div>

        <div className="thirdheader-nav-links">
          <NavLink className="thirdheader-allLinks" to="/createwebsite">Website Builder</NavLink>
          <NavLink className="thirdheader-allLinks" to="/website/for/blog">Blog</NavLink>
          <NavLink className="thirdheader-allLinks" to="/customers">Customers</NavLink>
          <NavLink className="thirdheader-allLinks" to="/community">Community</NavLink>
          <NavLink className="thirdheader-allLinks" to="/pricing">Pricing</NavLink>
          <NavLink className="thirdheader-allLinks" to="/login">Log in</NavLink>
          <NavLink className="thirdheader-allLinks thirdheader-cta-button"  to="/createwebsite">Make a Website</NavLink>
        </div>
      </nav>
{/* 
      <div className="thirdheader-content-section">
        <div className="thirdheader-breadcrumb">
          <NavLink className="thirdheader-breadcrumb-link" to="/website">Website</NavLink>
          <span>/</span>
          <span>Website SEO</span>
        </div>

        <h1 className="thirdheader-page-title">Website SEO</h1>
        <p className="thirdheader-date">22 Nov, 2023</p>

        <div className="thirdheader-newsletter-box">
          <h3 className='thirdheader-newsletter-box-h3'>Join 10,000+ people and get insights to make money from your website</h3>
          <p className='thirdheader-newsletter-box-p'>Sign up for our newsletter.</p>
          <button className="thirdheader-subscribe-button">Subscribe now</button>
        </div>
      </div> */}
    </div>
  );
};

export default ThirdHeader;