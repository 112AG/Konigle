import React from 'react'
import './SEO.css'
import { Link } from 'react-router-dom'

function SEO() {
  return (
    <div className='seo'>
        <div className="seo-one seo-head">
            <Link className='seo-link'>Website</Link>
            /
            <Link className='seo-link'>Website SEO</Link>
        </div>
        <div className="seo-two seo-head">
            <h1 className='seo-heading'>Website SEO</h1>
            <p className="seo-date">22 Nov, 2023</p>
        </div>
        <div className="seo-three seo-head">
            <h6 className="seo-card-paraOne">Join 10,000+ people and get insights to make money from your website</h6>
            <p className="seo-card-paraTwo">Sign Up for our Newsletter.</p>
            <button className="seo-btn">Subscribe now</button>
        </div>
    </div>
  )
}

export default SEO