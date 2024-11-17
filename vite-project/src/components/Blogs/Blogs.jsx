import React from 'react'
import './Blogs.css'
import { Link } from 'react-router-dom'

function Blogs() {
    const blog = [
        {
            blogLink : 'Website builder/Website',
            blogHead: 'What makes a good website ?',
            blogPara: 'A website that is optimized for organic traffic, has solid SEO fundamentals, publishes content often, has marketing automation built in, has no agency lock-in, and focuses on performance rather than looks is what makes a website good.',
            blogImg: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            blogName: 'Ghanshyam jhadav',
            blogDate: '12 Aug,2024'
        },
        {
            blogLink : 'Konigle / Product News',
            blogHead: `What's new in Konigle: Jul 2024`,
            blogPara: `Here's a summary of newly released features on Konigle in July 2024.`,
            blogImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            blogName: 'Wen Lin Poh',
            blogDate: '01 Aug,2024'
        },
        {
            blogLink : 'Konigle / Product News',
            blogHead: `What's new in Konigle: Jun 2024`,
            blogPara: `Here's a summary of newly released features on Konigle in June 2024.`,
            blogImg: 'https://images.unsplash.com/photo-1527565290982-018bcfdbee74?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            blogName: 'Wen Lin Poh',
            blogDate: '01 Jul,2024'
        },
        {
            blogLink : 'Business Fundamentals / Profitable Revenue',
            blogHead: `収益性のある売上`,
            blogPara: `インターネットで収益を上げるために最も重要なポイント`,
            blogImg: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            blogName: 'Minoru Shiina',
            blogDate: '14 Jun,2024'
        },
        {
            blogLink : 'Product/Launch',
            blogHead: `TimeBL AI`,
            blogPara: `Introducing Konigle's chat based system that specialises in being an AI web developer with digital marketing skills`,
            blogImg: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            blogName: 'Jatin khosla',
            blogDate: '06 Jun,2024'
        },
        {
            blogLink : 'Konigle/Product News',
            blogHead: `What's new in konigle: Ma 2024`,
            blogPara: `Here's a summary of newly released features on Konigle in May 2024.`,
            blogImg: 'https://images.unsplash.com/photo-1593990965215-075c1f918806?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            blogName: 'Wen Lin Poh khosla',
            blogDate: '05 Jun,2024'
        },
        
    ]

    const blogTwo = [
        {
            blogTwoHead : 'Wedding Planners Website',
            blogTwoDate : '26 Mar, 2024',
        },
        {
            blogTwoHead : 'Travel Agency Website',
            blogTwoDate : '26 Mar, 2024'
        },
        {
            blogTwoHead : 'Non-Profit Organization',
            blogTwoDate :'26 Mar, 2024'
        },
        {
            blogTwoHead : 'Restaurant Website',
            blogTwoDate : '26 Mar, 2024'
        },
        {
            blogTwoHead : 'Real Estate Website' ,
            blogTwoDate : '26 Mar, 2024'
        },
        {
            blogTwoHead : 'Plumber Website',
            blogTwoDate : '26 Mar, 2024'
        },
    ]

    const tags = [
        { name: 'B2B ecommerce', count: 1 },
        { name: 'Behind the product', count: 9 },
        { name: 'BFCM', count: 1 },
        { name: 'Blogging', count: 1 },
        { name: 'Books', count: 2 },
        { name: 'Business Fundamentals', count: 19 },
        { name: 'Business News', count: 8 },
        { name: 'Case Studies', count: 19 },
        { name: 'Company News', count: 5 },
        { name: 'Customer Stories', count: 2 },
        { name: 'Cyber Security', count: 2 },
        { name: 'Data Studies', count: 3 },
        { name: 'Digital Marketing', count: 1 },
        { name: 'Discord', count: 1 },
        { name: 'Dropshipping', count: 2 },
        { name: 'Ecommerce', count: 1 },
        { name: 'Email Marketing', count: 1 },
        { name: 'Growth Mindset', count: 20 },
        { name: 'IndiaMART', count: 6 },
        { name: 'Inspiration', count: 1 },
        { name: 'Inventory Management', count: 2 },
        { name: 'Konigle', count: 6 },
        { name: 'Learn from the best', count: 13 },
        { name: 'Marketing', count: 16 },
        { name: 'Online Sellers', count: 4 },
        { name: 'Pricing Fundamentals', count: 21 },
        { name: 'Pricing Strategy', count: 12 },
        { name: 'Product', count: 1 },
        { name: 'SEO', count: 9 },
        { name: 'Shopee', count: 4 },
        { name: 'Shopify', count: 19 },
        { name: 'Shopify SEO', count: 1 },
        { name: 'Store Management', count: 1 },
        { name: 'Website Builder', count: 13 },
        { name: 'Winning Products', count: 2 }
      ];
    

  
      return (
        <div className='blog-main top-padding'>
            <div className="blog-partOne">
                <h1 className='blog-heading'><span className='blue-text'>Konigle</span>Blog</h1>
                <p className="blog-para">Get insights on how to make a website and make money from it. For important website terms, browse our <Link>website glossary</Link>, for FAQs and how-to guides, check out our <Link>community</Link>.</p>
            </div>

            <div className="blog-partTwo">
                <div className="blogAll-card">
                    {blog.map((entry, index) => (
                        <div className="blog-card" key={index}> {/* Key added here */}
                            <Link className='blog-links'>{entry.blogLink}</Link>
                            <h6 className='blog-head'>{entry.blogHead}</h6>
                            <p className='blog-paraTwo'>{entry.blogPara}</p>
                            <div className='blog-commnters'>
                                <div className="blog-image-div">
                                    <img className='blog-image' src={entry.blogImg} alt="" />
                                </div>
                                <p className='blog-names'>{entry.blogName} <br /> <span className='blog-dates'>{entry.blogDate}</span></p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='blog-card-two'>
                    {blogTwo.map((entry, index) => (
                        <div className="blog-cardTwo" key={index}> {/* Key added here */}
                            <h6 className="blog-headTwo">{entry.blogTwoHead}</h6>
                            <p className="blog-dates"> {entry.blogTwoDate}</p>
                        </div>
                    ))}
                </div>
                
                <hr className='blog-hr'/>
                <div className="blog-pageChanger mt-8 flex justify-between items-center">
                    <button className="blog-startBtn text-blue-600 font-medium">Start</button>
                    <div className="blog-pageList text-gray-600">Page 1 of 20</div>
                    <button className="blog-nextBtn">Next</button>
                </div>
            </div>

            {/* Divider */}
            <div className="blog-divider" />

            {/* Tags Section */}
            <div className="blog-tag-section">
                <div className="blog-btn-list">
                    {tags.map((tag, index) => (
                        <button
                            key={index} // Key added here
                            className="blog-btns"
                        >
                            <span className="blog-btn-name">{tag.name}</span>
                            {tag.count && (
                                <span className="blog-btn-num">
                                    {tag.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
                <div className="newsletter-section">
                    <h2 className="newsletter-heading">Join 10,000+ people and get insights to make money from your website</h2>
                    <p className="newsletter-subtext">Sign up for our newsletter.</p>
                    <button className="subscribe-button">Subscribe now</button>
                </div>
            </div>
        </div>
    )
}


export default Blogs