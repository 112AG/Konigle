import React from 'react'
import './Imprint.css'
import { Link } from 'react-router-dom'

function Imprint() {
    const imprint = [
        {
            head: "Company",
            para: (<p>Konigle Pte Ltd <br /><br /> UEN: 201815303 Konigle Pte Ltd is incorporated in <b>Singapore</b>. <br /><br />Registered Address #12-07, Suntec Tower One,<br />7 Temasek Boulevard,<br />Singapore 038987
                </p>)
        },
        {
            head: "Singapore Office",
            para : (<p>#12-04A, Shenton House,<br />3 Shenton House,<br />Singapore 068805</p>)
        },
        {
            head: "Contact",
            para: (<p>Email: info[at]konigle.com<br />Looking for job openings? <Link style={{ textDecoration: 'underline', color: 'black',  }}>View all job openings</Link> .</p>)
        }
    ]
  return (
    <div className='imprint'>
        <h1>Imprint/Impressum</h1>
        <p>Administrative Information about our company.</p>
        {
            imprint.map((val, idx) => (
                <div key={idx} className="imprint-container">
                    <h4 className="imprint-head">{val.head}</h4>
                    <div className="imprint-para">{val.para}</div>
                </div>
            ))
        }
    </div>
  )
}

export default Imprint