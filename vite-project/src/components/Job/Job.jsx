import React from 'react'
import './Job.css'
import { Link } from 'react-router-dom'
import Konigle from '../../assets/Konigle.png'

function Job() {
  return (
    <div className='job'>
      <nav className='job-nav'>
        <h1>W<span>:</span></h1>
        <ul>
          <li><Link className='active-job job-links'>Discover</Link></li>
          <li><Link className='job-links'>Find Jobs</Link></li>
          <li><Link className='job-links'>For Recruiters</Link></li>
          <button className='job-btn-one'>Log In</button>
          <button className='job-btn-two'>Sign Up</button>
        </ul>
      </nav>
      <div className="job-head-one">
        <div>
          <Link>Discover</Link>/
          <Link>StartUps</Link>/
          <Link className='job-sp-link' >Konigle</Link>
        </div>
        <div className="job-header-container">
      <div className="job-company-section">
        <div className="job-logo">
          <img src={Konigle} alt="" />
        </div>
        
        <div className="job-company-info">
          <h1 className="job-company-name">Konigle</h1>
          <p className="job-company-description">AI Website Builder</p>
          <p className="job-employee-count">1-10 Employees</p>
          
          <div className="job-badges-container">
            <span className="job-badge">
              <span className="job-badge-icon">🏆</span>
              Top 5% of responders
            </span>
            <span className="job-badge">
              <span className="job-badge-icon">⏱️</span>
              Responds within a few days
            </span>
            <span className="job-badge">
              <span className="job-badge-icon">🚀</span>
              Early Stage
            </span>
          </div>
        </div>
      </div>
      <div className="job-actions">
        <button className="job-share-button">Share</button>
        <button className="job-follow-button">
          <span className="job-plus-icon">+</span>
          Follow
        </button>
      </div>
    </div>
      </div>

      <div className="job-container-two">
      <nav className="job-nav-menu">
        <Link href="#" className="job-nav-item active">Overview</Link>
        <Link href="#" className="job-nav-item">People</Link>
        <Link href="#" className="job-nav-item">Culture and benefits</Link>
        <Link href="#" className="job-nav-item">Funding</Link>
        <Link href="#" className="job-nav-item">Jobs<span className="job-count">1</span></Link>
      </nav>

      <div className="job-content-wrapper">
        <main className="job-main-content">
          <h1>Konigle careers</h1>
          <h2>AI Website Builder</h2>
          
          <p className="job-description">
            Konigle makes participating in the internet economy simple and profitable. We are building an 
            AI website developer that also has digital marketing skills. Konigle is used in over 90 countries.
          </p>

          <section className="jobs-section">
            <div className="job-section-header">
              <h3 className="job-section-title">Jobs</h3>
              <Link href="#" className="job-view-all">View all jobs →</Link>
            </div>

            <div className="job-listing">
              <Link href="#" className="job-title">Software Engineer - Web Design</Link>
              <div className="job-meta">In office • Singapore • $48k – $72k • No equity</div>
              <div className="job-actions">
                <button className="job-btn job-btn-save">Save</button>
                <button className="job-btn job-btn-apply">Apply</button>
              </div>
            </div>
          </section>

          <section className="job-founders-section">
            <div className="job-section-header">
              <h3 className="job-section-title">Founders</h3>
              <Link href="#" className="job-view-all">View all team members →</Link>
            </div>

            <div className="job-founders-grid">
              <div className="job-founder-card">
                <div className="job-founder-header">
                  <div>
                    <h4 className="job-founder-name">Ashish Kumar</h4>
                    <div className="job-founder-position">Co-founder • 7 years</div>
                  </div>
                  <img src="https://plus.unsplash.com/premium_photo-1730828574429-304363d172c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ashish Kumar" className="job-founder-avatar" />
                </div>
                <p className="job-founder-bio">
                  Founder | CTO Konigle Bringing cutting-edge AI research to Small Businesses. 
                  PhD in Applied Machine Learning from NTU, Singapore.
                </p>
              </div>

              <div className="job-founder-card">
                <div className="job-founder-header">
                  <div>
                    <h4 className="job-founder-name">Jatin Khosla</h4>
                    <div className="job-founder-position">Co-founder & CEO • 7 years</div>
                  </div>
                  <img src="https://plus.unsplash.com/premium_photo-1729581092024-e61ccc9dccfb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jatin Khosla" className="job-founder-avatar" />
                </div>
                <p className="job-founder-bio">Co-Founder and CEO at Konigle</p>
              </div>
            </div>
          </section>
        </main>

        <aside className="job-sidebar">
          <div className="job-sidebar-section">
            <h3 className="job-sidebar-heading">ABOUT KONIGLE</h3>
            
            <div className="job-info-section">
              <div className="job-info-label">Website</div>
              <Link href="https://konigle.com" className="job-website-link">konigle.com</Link>
              <div className="job-social-links">
                <Link href="#" className="job-social-link">🔗</Link>
                <Link href="#" className="job-social-link">𝕏</Link>
                <Link href="#" className="job-social-link">fb</Link>
                <Link href="#" className="job-social-link">in</Link>
              </div>
            </div>

            <div className="job-info-section">
              <div className="job-info-label">Locations</div>
              <div className="job-info-content">Singapore</div>
              <div className="job-info-content">Remote</div>
            </div>

            <div className="job-info-section">
              <div className="job-info-label">Company size</div>
              <div className="job-info-content">1-10 people</div>
            </div>

            <div className="job-info-section">
              <div className="job-info-label">Company type</div>
              <div className="job-tags">
                <span className="job-tag">SaaS</span>
                <span className="job-tag">Enterprise Software Company</span>
                <span className="job-tag">E Commerce</span>
              </div>
            </div>

            <div className="job-info-section">
              <div className="job-info-label">Markets</div>
              <div className="job-tags">
                <span className="job-tag">Ecommerce</span>
                <span className="job-tag">Website</span>
                <span className="job-tag">Artificial Intelligence / Machine Learning</span>
              </div>
            </div>
          </div>

          <div className="job-sidebar-section">
            <h3 className="job-sidebar-heading">JOBS AT KONIGLE</h3>
            <Link href="#" className="jobs-link">
              Engineering<span className="jobs-count">1 job →</span>
            </Link>
          </div>
        </aside>
      </div>
    </div>

    {/*  */}
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">wellfound<span className="logo-dot">:</span></div>
          <div className="social-links">
          <i class="social-icon ri-twitter-fill"></i>            {/* <Instagram className="social-icon" /> */}
          <i class="social-icon ri-instagram-fill"></i>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="footer-nav-group">
          <div className="footer-column">
            <h3>For Candidates</h3>
            <nav>
              <Link to="/">Overview</Link>
              <Link to="/">Startup Jobs</Link>
              <Link to="/">Web3 Jobs</Link>
              <Link to="/">Featured</Link>
              <Link to="/">Startup Hiring Data</Link>
              <Link to="/">Tech Startups</Link>
              <Link to="/">Remote</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h3>For Recruiters</h3>
            <nav>
              <Link to="/">Overview</Link>
              <Link to="/">Recruit Pro</Link>
              <Link to="/">Curated</Link>
              <Link to="/">RecruiterCloud</Link>
              <Link to="/">Hire Developers</Link>
              <Link to="/">Pricing</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <nav>
              <Link to="/">About</Link>
              <Link to="/">Help</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Terms & Risks</Link>
              <Link to="/">Privacy & Cookies</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          Copyright © 2024 Wellfound. All rights reserved.
        </div>
        <div className="footer-browse">
          Browse by: 
          <div className="browse-links">
            <Link to="/">Jobs</Link>
            <Link to="/">Remote Jobs</Link>
            <Link to="/">Locations</Link>
            <Link to="/">Startups</Link>
            <Link to="/">Startups Hiring</Link>
            <Link to="/">Industries</Link>
            <Link to="/">Tech Hubs</Link>
          </div>
        </div>
      </div>
    </div>
    {/*  */}
    
    </div>
  )
}

export default Job