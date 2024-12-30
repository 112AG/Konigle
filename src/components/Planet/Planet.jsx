import React from 'react'
import './Planet.css'
import { Link } from 'react-router-dom'

function Planet() {

    const planet = [
        {
            head: "Carbon Removal",
            para: "Carbon removal is the simplest measure we can take to help address climate change. To further this cause, beginning Jan 1st 2022, we are contributing 0.3% of our revenue to carbon removal technologies via Stripe Climate ."
        },
        {
            head: "More than just a mission",
            para: "With every customer Konigle serves, we can not just help remove more carbon, but using Konigle the business uses less energy due to the elimination of repetitive work, reducing carbon footprint even further. Morever, as Konigle helps a business grow, they can also think of contributing towards the mission of making the planet better for our future generations."
        },
        {
            head: "Let us not lose earth",
            para: "Remember we are the last generation that can do something about it."
        }
    ]

  return (
    <div className='planet'>
        <h1>Planet</h1>
        <p className='planet-paraHead'>Updated on 1st January 2022</p>

        <p className='planet-paragraph'>Climate change is <b>real</b>. We realistically do not have a lot of time to make sure our beloved earth is habitable by the future of mankind. <b>We are the last generation that can do something</b> about it. As a human being we on an average only have <Link>4000 weeks</Link> on earth, and we should do our best to make sure, humans coming after us get the best of planet Earth.</p>

        {
            planet.map((val, idx) => (
                <div>
                     <h4 className="planet-heads">{val.head}</h4>
                    <p className='planet-paras'>{val.para}</p>
                </div>
            ))
        }
        <h4>The Konigle Team</h4>
        <button>Get in Touch</button>

    </div>
  )
  
}

export default Planet