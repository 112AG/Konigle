import React from 'react'
import './Integration.css'
import { Link } from 'react-router-dom'

function Integration() {
    const integration = [
        {
            head: 'Shopify',
            paragraph: "Collection of seller tools to automate cost effective growth strategies for a Shopify store within minutes.",
            link: 'Connect Shopify with Konigle now '
        },
        {
            head: 'Shopify Plus',
            paragraph: "The most powerful price editor for Shopify Plus Stores.",
            link: 'Connect Shopify Plus with Konigle now '
        },
        {
            head: 'Magento',
            paragraph: "Auotmate price management, competitor tracking, order tagging and much more on your Magento Store with Konigle",
            link: 'Connect Magento with Konigle now '
        },
        {
            head: 'Shopee',
            paragraph: "Save time doing busy work while running your shopee store, with Konigle. Product Research, Running promotions and much more.",
            link: 'Connect Shopee with Konigle now '
        },
        {
            head: 'Salesforce',
            paragraph: "Connect Salesforce to your online store and automate manual tasks to save time and make more money online.",
            link: 'Connect Salesforce with Konigle now '
        },
        {
            head: 'Discord',
            paragraph: "Get alerts, reports right inside discord from your e-commerce store with the Konigle Discord Bot.",
            link: 'Connect Discord with Konigle now '
        },
        {
            head: 'Xero',
            paragraph: "Sync paid orders, import inventory into Xero from your e-commerce store for accounting.",
            link: 'Connect Xero with Konigle now '
        },
        {
            head: 'Slack',
            paragraph: "Get alerts, reports right inside slack from your e-commerce store with the Konigle Slack Bot.",
            link: 'Connect Slack with Konigle now '
        },
        {
            head: 'Etsy',
            paragraph: "Integration Etsy stores with Konigle",
            link: 'Connect Etsy with Konigle now '
        },

    ]
  return (
    <div className='integration-main'>
        <h1 className='integration-heading'>Apps and platforms Konigle integrates with</h1>
        <p className='inegration-para'>Integrate Konigle with the apps you use and the platform you run your online store on, to start growing your online store cost effectively and simplify your store ops.</p>
        <div className='integration-allCards'>
        {
            integration.map((entry, index) => (
                <div key={index} className="integration-card">
                    <h5 className='integration-entry-head'>{entry.head}</h5>
                    <p className='integration-entry-para'>{entry.paragraph} </p>

                    <Link className='integration-entry-link'>{entry.link} <i class="ri-arrow-right-line"></i></Link>
                    <div className="integration-color"></div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Integration