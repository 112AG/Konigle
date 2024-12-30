import React from 'react'
import './AITool.css'
import { Link } from 'react-router-dom'
// import konigle from '../../assets/AiTool.png'


function AITool() {
  return (
    <div className='aitool'>
        <div className="aitool-one aitool-head">
            <Link className='aitool-link'>Feature</Link>
            /
            <Link className='aitool-link'>AI Tool</Link>
        </div>
        <div className="aitool-two aitool-head">
            <h1 className='aitool-heading'>AI Tools</h1>
            <p className="aitool-date">10 Jan, 2024</p>
            <div className="aitool-content">
                <p className='aitool-para'>Konigle integrates AI automation tools to help with the content creation process. From pages to blogs to building a glossary, make use of AI to speed up the process while keeping it SEO-friendly. <br />Here's what our AI tool can do:</p>
                <ul className='aitool-lists'>
                    <li className='aitool-list'>Generate page content and cover images</li>
                    <li className='aitool-list'>Optimise HTML tags</li>
                    <li className='aitool-list'>Create images to be used in various website components</li>
                    <li className='aitool-list'>Suggest LSI terms</li>
                    <li className='aitool-list'>Write Product description and titles for e-commerce
                    </li>
                </ul>
                <div className="aitoolimg">
                <img className='aiImage' src="https://cdn.konigle.com/images/2024/ai-tools--v1706173504.jpeg" alt="" />
                </div>
            </div>
        </div>
        <div className="aitool-three aitool-head">
            <h6 className="aitool-card-paraOne">Join 10,000+ people and get insights to make money from your website</h6>
            <p className="aitool-card-paraTwo">Sign Up for our Newsletter.</p>
            <button className="aitool-btn">Subscribe now</button>
        </div>
    </div>
  )
}

export default AITool