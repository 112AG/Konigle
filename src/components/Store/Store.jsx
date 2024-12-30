import React from 'react'
import './Store.css'
import Konigle from '../../assets/Konigle.png'
import { Link } from 'react-router-dom'

function Store() {

    const store = [
        {
            img: "https://store.koniglecdn.com/images/artboard-46-copy.webp",
            head: "Google Page Insights of Top 10000 Websites T-shirt",
            button: "Request the Product"
        },
        {
            img: "https://store.koniglecdn.com/images/konigle-mug-eac8d5ef8558.png",
            head: "Konigle Mug",
            button: "Request the Product"
        },
        {
            img: "https://store.koniglecdn.com/images/tumbler-7536e97c36a0.png",
            head: "Tumbler",
            button: "Request the Product"
        },
    ]

  return (
    <div className='store-head'>
        <nav>
            <div className='store-navs'>
                <div className="storeImg">
                    <img src={Konigle} alt="" />
                </div>
                <Link to="/" >Home</Link>
                <Link to="/pricing">Products</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="store-navs">
                <Link to="/login">Login</Link>
                <Link to="/seller-tools"><i class="ri-shopping-cart-2-line"></i></Link>
                <Link><i class="ri-search-line"></i></Link>
            </div>
        </nav>
        <main>
        {
            store.map((val, indx) => (
                <div className="store-Pcard">
                    <div key={indx} className="store-card">
                        <div className="store-img">
                            <div></div>
                            <img className='storecard-Image' src={val.img} alt="" />
                        </div>
                        <h3>{val.head}</h3>
                    </div>
                    <button className="store-btn">{val.button}</button>
                </div>
            ))
        }
        <div className="store-bluebox">
            <h1>Any enquiries?</h1>
            <p>Reach out to us!</p>
            <button>Contact Us</button>
        </div>
        </main>
        <footer className='store-footer'>
            <div className="footer-linkContent">
                <div>
                    <Link to='/blog' className='store-footerLnk'>Blog</Link>
                    <Link to='/' className='store-footerLnk'>Company</Link>
                    <Link to='/status' className='store-footerLnk'>Glossary</Link>
                </div>
                <div>
                <Link to='/about' className='store-footerLnk'>About Us</Link>
                <Link to='/contact' className='store-footerLnk'>Contact Us</Link>
                <Link to='/help' className='store-footerLnk'>Help</Link>
                </div>
            </div>
            <p>⚡Built with Konigle•Site Map</p>
        </footer>
    </div>
  )
}

export default Store