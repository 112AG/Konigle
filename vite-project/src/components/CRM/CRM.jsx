import React from 'react'
import './CRM.css'
import { Link } from 'react-router-dom'

function CRM() {
  return (
    <div className='crm'>
        <div className="crm-one crm-head">
            <Link className='crm-link'>Feature</Link>
            /
            <Link className='crm-link'>CRM</Link>
        </div>
        <div className="crm-two crm-head">
            <h1 className='crm-heading'>CRM</h1>
            <p className="crm-date">10 Jan, 2024</p>
        </div>
        <div className="crm-three crm-head">
            <h6 className="crm-card-paraOne">Join 10,000+ people and get insights to make money from your website</h6>
            <p className="crm-card-paraTwo">Sign Up for our Newsletter.</p>
            <button className="crm-btn">Subscribe now</button>
        </div>
    </div>
  )
}

export default CRM