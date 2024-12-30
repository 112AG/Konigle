import React from 'react'
import './AllFeatures.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function AllFeatures() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    const allfeatures = [
        {
            head: "Build Link in Bio Style Websites",
            para: (
                <span>You can <b>build SEO-friendly</b> <Link to="/link-in-bio" style={{ color: 'Black' }}>Link In Bio Style Websites</Link> with Konigle.</span> 
            ),
            img: "https://cdn.konigle.com/images/2024/link-in-bio-style--v1706171962.jpeg"
        },
        {
            head: "Set up a Blog & Newsletter",
            para: (
                <span>Set up a blog & newsletter quickly with the helop of <Link  style={{ color: 'Black' }} >AI tools</Link> <b>available on Konigle.</b></span>
            ),
            img: "https://cdn.konigle.com/images/2024/website-blog--v1706159079.jpeg",
        },
        {
            head: "Create a Website for your Business",
            para: (
                <span><Link  style={{ color: 'Black' }}>Creating a business Website</Link> is easy when buit with Konigle's <b>user-friendly and zero-coding</b> website builder.</span>
            ),
            img: "https://cdn.konigle.com/images/2024/website-business--v1706159625.jpeg"
        },
        {
            head: "Sell via an eCommerce Website",
            para: (
                <span>Konigle enables you to <Link  style={{ color: 'Black' }}>sell via an eCommerce website</Link> using oour commerce tools available on the platform.</span>
            ),
            img: "https://cdn.konigle.com/images/2024/ecommerce-website--v1706158888.jpeg"
        },
        {
            head: "Manage multiple websites within a single system",
            para: (
                <span><Link  style={{ color: 'Black' }}>Manage multiple sites</Link> with a single Content Management System (CMS) when you use Konigle.</span>
            ),
            img: "https://cdn.konigle.com/images/2024/multiple-websites--v1706174225.jpeg"
        },
        {
            head: "Email & SMS campaign marketng",
            para: (
                <span>Lanching an <Link  style={{ color: 'Black' }}>email or SMS marketing campaign</Link> <b>does not require an external plugin or application</b> for websites buit with Konigle.</span>
            ),
            img: "https://cdn.konigle.com/images/2024/email-sms-marketing--v1706160850.jpeg"
        },
        {
            head: "Built-in Website Plugins",
            para: (
                <span>There is <Link  style={{ color: 'Black' }}>no need for installation of external plugins</Link> for websites built with Konigle.</span>
            ),
            img: "https://cdn.konigle.com/images/2024/website-plugins--v1706160947.jpeg"
        }
    ]

  return (
    <div className='allfeatures'>
        <div className="allfeatures-one allfeatures-head">
            <div className="featuremain-links">
            <Link className='allfeatures-link'>Features</Link>
            /
            <Link className='allfeatures-link'>All Konigle features</Link>
            </div>

            <div className={`features-allLinks ${isMenuOpen ? 'active' : ''}`}> 
                    <Link className='main-links-features'>Build Link In Bio Style Websites</Link>
                    <Link className='main-links-features'>Set up a Blog & Newsletter</Link>
                    <Link className='main-links-features'>Create a Website for your Business</Link>
                    <Link className='main-links-features'>Sell via an eCommerce Website</Link>
                    <Link className='main-links-features'>Manage multiple Websites within a single system</Link>
                    <Link className='main-links-features'>Email & SMS campaign marketing</Link>
                    <Link className='main-links-features'>Built-in Website Plugins</Link>
                </div>
                <i className="menu toggleIcon ri-menu-line" onClick={toggleMenu} style={{ display: isMenuOpen ? 'none' : 'block' }}></i> 
                <i className="close toggleIcon ri-close-line" onClick={toggleMenu} style={{ display: isMenuOpen ? 'block' : 'none' }}></i>

        </div>
        <div className="allfeatures-two allfeatures-head">
            <h1 className='allfeatures-heading'>All Konigle features</h1>
            <p className="allfeatures-date">10 Jan, 2024</p>
            {
                allfeatures.map((data, index) => (
                    <div key={index} className="allfeatures-linksdata">
                        <h2 className="features-headingTwo">{data.head}</h2>
                        <p className="features-paraTwo">{data.para}</p>
                        <div className='features-listImg'>
                            <img src={data.img} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="allfeatures-three allfeatures-head">
            <h6 className="allfeatures-card-paraOne">Join 10,000+ people and get insights to make money from your website</h6>
            <p className="allfeatures-card-paraTwo">Sign Up for our Newsletter.</p>
            <button className="allfeatures-btn">Subscribe now</button>
        </div>
    </div>
  )
}

export default AllFeatures