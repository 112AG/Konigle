import React from 'react'
import './Shopify.css'

function Shopify() {
  return (
    <div className='shopify-main page-padding'>
        <h1 className='shopify-heading'>Shopify App</h1>
        <div className="shopify-cards-list">
        <div className="all-cards">
            <div className='shopify-card'>
                <h1 className="shopify-feature-card">How to <span className='help-feature-card-blue'>backup</span> your store data in konigle?</h1>
              </div>
              <h6 className='shopify-feature-card-para'>How to backup your store data in Konigle?</h6>
            </div>

            <div className="all-cards">
            <div className='shopify-card'>
                <h1 className="shopify-feature-card">How to connet your<span className='help-feature-card-blue'>Shopify</span> store with konigle?</h1>
              </div>
              <h6 className='shopify-feature-card-para'>How to connet your Shopify store with Konigle?</h6>
            </div>

            <div className="all-cards">
            <div className='shopify-card'>
                <h1 className="shopify-feature-card">How to <span className='help-feature-card-blue'>sync your Shopify</span> store with Konigle?</h1>
              </div>
              <h6 className='shopify-feature-card-para'>How to sync your Shopify store with Konigle?</h6>
            </div>

            <div className="all-cards">
            <div className='shopify-card'>
                <h1 className="shopify-feature-card">How to <span className='help-feature-card-blue'>revert reprice request</span> made in Konigle's Bulk Price Editor?</h1>
              </div>
              <h6 className='shopify-feature-card-para'>How to revert reprice request made in <br /> Konigle's Bulk Price Editor?</h6>
            </div>

            <div className="all-cards">
            <div className='shopify-card'>
                <h1 className="shopify-feature-card">I have <span className='help-feature-card-blue'>Multiple Currency enabled</span> in my store, will the Konigle App still work?</h1>
              </div>
              <h6 className='shopify-feature-card-para'>I have Multiple Currency enabled in my store, <br /> will the Konigle App still work?</h6>
            </div></div>            
    </div>
  )
}

export default Shopify