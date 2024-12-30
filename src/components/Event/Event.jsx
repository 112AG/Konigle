import React from 'react'
import './Event.css'
import { Link } from 'react-router-dom'

function Event() {
  return (
    <div className='event'>
      <div className="event-one event-padding">
          <h1>Konigle Event</h1>
          <p>Sign up for our events and webinars about running an efficient online business.</p>
      </div>
      <div className="event-two event-padding">
        <div className="eventcard">
          <div className="card-imgParent">
            <img src="https://cdn.konigle.com/shopee-seller.jpg" alt="" />
          </div>
          <div className="event-contents">
          <Link>Webinar</Link>
          <h2>6 figure selling on shopee</h2>
          <p className='event-paragraph'>As a Shopee Seller you are like a superhero, juggling family life with a lot of hard work. You spend your time finding products to sell, finding suppliers, marketing products, fulfilling orders and so much more, but there are only 24 hours in a day. As with any superhero, a sidekick is always helpful and Konigle is that sidekick. That helps you focus on scaling your store, while it takes care of the boring stuff. Join us for a 30 minute webinar followed by 20 minutes of Q&A, this Friday</p>
          <h6>At 4pm (GMT +8)</h6>
          <p className="event-date">03 Dec, 2021 . 30 minutes</p>
          <button>Regiser</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event