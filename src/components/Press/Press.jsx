import React from 'react'
import './Press.css'
import { Link } from 'react-router-dom'

function Press() {
    const press = [
        {
            img: "https://cdn.konigle.com/images/2024/hosting_advice--v1711077904.png",
            link: "HostingAdvice",
            heading: "HostingAdvice reviews Konigle",
            para: "SEO-Focused Website Builder Software Konigle Helps SMBs Make Money Online",
            headingtwo: "By HostingAdvice",
            date: "22 Mar,2024",
            time: "9 minutes"
        },
        {
            img: "https://cdn.konigle.com/stripe-climate.jpg",
            link: "Stripe",
            heading: "Konigle x Stripe Climate",
            para: "At Konigle, we have decided to contribute 0.3% of our revenue for carbon removal, beginnig 1 January 2022.",
            headingtwo: "By Stripe",
            date: "01 Jan,2022",
            time: "5 minutes"
        },
        {
            img: "https://cdn.konigle.com/top-singapore-companies.webp",
            link: "beststartup.asia",
            heading: "Top Singapore b2b Companies",
            para: "Happ to be part of beststartup.asia top b2b companies based in Singapore.",
            headingtwo: "By beststartup.asia",
            date: "14 Sep, 2021",
            time: "5 minutes"
        },
        {
            img: "https://cdn.konigle.com/sginnovate-summation-program.jpg",
            link: "SGInnovate",
            heading: "SGInnovate Summation Program",
            para: "Data Science Internships at Konigle via the SGInnovate Summation Program.",
            headingtwo: "By SGInnovate",
            date: "01 Seop,2020",
            time: "2 minutes"
        },
        {
            img: "https://cdn.konigle.com/singapore-edb.jpg",
            link: "EDB Singapore",
            heading: "Starting up in Singapore",
            para: "SEO-Focused Website Builder Software Konigle Helps SMBs Make Money Online",
            headingtwo: "By EDB Singapore",
            date: "24 APR, 2020",
            time: "6 minutes"
        },
        {
            img: "https://cdn.konigle.com/francis_choo_ingram_micro.jpg",
            link: "Konigle at Ingram Micro Comet",
            heading: "Channel Asia",
            para: "Ingram Micro showcases 15 innovative ISVs in ASEAN Selected out of 129 applicants",
            headingtwo: "By Channel Asia",
            date: "12 Dec,2019",
            time: "5 minutes"
        },
        {
            img: "https://cdn.konigle.com/msme-business-owner-india.jpg",
            link: "Singapore Retail Association",
            heading: "Konigle at SRIC.E 2019",
            para: "SRA revealed Konigle as its New Curated Tech Snapshots-Solution to ransform Retail for the first time.",
            headingtwo: "By Singapore Retail Association",
            date: "16 Aug,2019",
            time: "5 minutes"
        },
        {
            img: "https://cdn.konigle.com/understanding-business.jpg",
            link: "Sleek",
            heading: "Data Automation & Intelligence for SMEs",
            para: "Konigle provifes data solutions for small and medium-sized companies, using automation and intelligence!",
            headingtwo: "By Sleek",
            date: "03 Jul, 2019",
            time: "6 minutes"
        },
        {
            img: "https://cdn.konigle.com/ef-demo-day-konigle.jpg",
            link: "SGInnovate",
            heading: "Taking the Guesswork Out of Data for Businesses",
            para: "What is the use of having vast amount of data, without the ability to make sense of it?",
            headingtwo: "By SGInnovate",
            date: "08 May,2019",
            time: "7 minutes"
        },
    ]
  return (
    <div className='press'>
        <div className="press-one press-padding">
            <h1>Press Resources</h1>
            <p>Konigle featured by press, media and other organisations. If you are creating content and would like to feature us, do not hesitate in reaching out at info@konigle.com</p>
        </div>
        <div className="presstwo press-padding">
        {
            press.map((val, idx) => (
                <div className="press-cards">
                    <div className="pressImg-parent">
                        <img src={val.img} alt="" />
                    </div>
                    <div className="press-cardContent">
                    <Link>{val.link}</Link>
                    <h2>{val.heading}</h2>
                    <p>{val.para}</p>
                    <h5>{val.headingtwo}</h5>
                    <p>{val.date} . {val.time}</p>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Press