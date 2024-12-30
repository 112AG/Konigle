import React from 'react'
import './BioLink.css'
import { Link } from 'react-router-dom'

function BioLink() {
  return (
    <div className='biolink-main'>
            <div className="biolink">
                <h1 className='bio-heading'>Hello 👋 Good afternoon!</h1>
                <div className="biochat-input">
                    <input type="text" className='bio-input-field' placeholder="Start typing..." />
                    <button className='bio-send-button'>⋀</button>
                </div>
                <div className="biolink-footer">
                    Use of Konigle is governed by our <Link to="/terms">terms of use</Link>. 
                    Read more about our <Link to="/ai">AI system</Link>.
                </div>
            </div>
        </div>
  )
}

export default BioLink