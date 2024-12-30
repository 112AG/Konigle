import React from 'react'
import './Testimonials.css'

function Testimonials() {

    const customers = [
        {
            feedback: "Really easy and user friendly app to change prices of all or set of products. They've all the fitler you need to apply price changes to selected products.",
            name: "Fashion Apparel"
        },
        {
            feedback: "Excelente opcion, para modificar precios, promociones por tiempo limitado, facil y rapido, el soporte es inmediato y atento en todo momento.",
            name: "Video Games and Accessories"
        },
        {
            feedback: "We found the perfect replacement for BOLD custom pricing and have saved over USD$50 per month! Our online store is used for B2B checkout. Konigle has completely replaced BOLD for a quarter of the price. Added to this, Konigle has so many other amazing functions that help us track customers, create pricing rules, manage our re-ordering and more. Great app - it's a tool everyone should have.",
            name: "Wholesale"
        },
        {
            feedback: "Konigle is such as useful app! It saves me sooo much time and is very user-friendly. Any issues the support team will help you with it.",
            name: "Fashion Apparl"
        },
        {
            feedback: "They are great, the attention is very timely and efficient. Services meet expectations. Besides how cheap it is.",
            name: "Women's Fashion Clothing"
        },
        {
            feedback: "I am very grateful you solved my problems and I didn't need to use my time to change every cost AND selling price separately! :) If you ask something, customer service is excellent! Thank you!",
            name: "Kitchenware"
        },
        {
            feedback: "Amazing support and some good people. The app needs to be in the number 1 spot for helping with price drops, sale, and manage discounts. Very quick and good support team.",
            name: "Pre Loved Luxury Fashion"
        },
        {
            feedback: "This app saves a ton of time on all things pricing, markdowns, inventory and receiving and has a lot of features that I haven't seen on any other similar apps.",
            name: "Fashion"
        },
        {
            feedback: "Great app, I have a large catalog of products and they have been very helpful to make sure everything is synced and to make sure all the operations are running for me.",
            name: "Home Décor"
        },
        {
            feedback: "I sincerely love it! It is the most intuitive tool and very well thought out since it has a filter that considers SKUs, variants, and more. I updated the price of over 3000 products with more than 10 variants each, in less than 10 minutes. Also, as a new store, I really appreciate that they wait until you make $1000 to charge you. It definitely helps scale our business without having to worry about massive initial costs. Very recommended.",
            name: "Handcrafted Products"
        },

        {
            feedback: "I have been a fan of the team at Konigle for a long time. This app has been fantastic for both my Shopify and Shopee stores. This app does so much more than pricing. EVERY small, medium and large business should be running this app. As a larger business, this will optimize your team members and ensure they are maximizing their time. Protect margins, capitalize on profit potential and create outstanding customer loyalty through this suite of tools. Thanks Konigle",
            name: "Health & Nutrition"
        },
        {
            feedback: "God service, og mange muligheder! Især hvis man skal have muligheden for at ændre i mange priser ad gangen.",
            name: "Auto Racing"
        },
        {
            feedback: "迄今为止最好的功能，支持人员非常乐于助人，让我完成了所有步骤，以及这个应用程序的许多其他功能，对这个应用程序非常满意和满意。优秀的应用程序和客户服务，允许您按百分比、乘数或固定更改您想要的产品的价格，它有多种选择目前为止最好的价格编辑器。",
            name: "Fashion"
        },
        {
            feedback: "The Developer Team of this app asks you for new features you want, and then adds the new features you want to the Konigle App, within a short time amount, in a highest quality way. Konigle’s a fantastic app. Made my life easier and made ability to edit prices and do more in my business hugely easier.",
            name: "Baby & Childcare"
        },
        {
            feedback: "This app is great and customer service is great they will help you right away am so glad they were able to help me set up the app in my store works perfect I would recommend it to everyone",
            name: "Women's Apparel"
        },
        {
            feedback: "You guys get it. You have features that are useful, no fancy stuff. Konigle keeps getting better every week, every time I log into Konigle I find something useful. It's fantastic, saves me so much time and you listen to feedback. I am a fan. Don't stop making Konigle better.",
            name: "Toys"
        },
        {
            feedback: "This tool Solves the problems on Bulk compare price editing.. 101% satisfied and trusted app.. Good Job!",
            name: "Books, Art & Crafts"
        },
        {
            feedback: "Excelente app y atención al cliente, permite cambiar el precio de los productos que se deseen por porcentaje, multiplicador o fijo, tiene varias opciones, pero el tema de bloqueo de precios hasta el momento bien.",
            name: "Dropshipping"
        },
        {
            feedback: "I really like this app, it offers a lot of great options. Everything we need and more. Saves time, effort, and money",
            name: "Retail Cosmetics"
        },
        {
            feedback: "I started using this app for the Lock prices feature and due to glitches in price changing. The best feature by far, The support staff is super helpful talked me through all the steps , and so many other features on this app, very pleased and so happy with this app.",
            name: "Gardening"
        },
        {
            feedback: "Just to say, that I'm happy I'm having more sales on my Shopee shop after using your services. But can I ask, how can i start paying as I am approaching 1000$ in sales.I'm asking so that I can include the cost of using your services in my P and L.",
            name: "Apparel"
        },
        {
            feedback: "Konigle is game-changing; not only is there incredibly fast and knowledgeable support, but it's an extremely agile and intuitive app clearly designed with UX and UI in mind. No matter your website experience level, you will be able to find your way around this app with ease and accomplish tasks that would otherwise take you hours in seconds. The filters allow for pinpoint targeting of specific products—by weight, tag, brand, you name it, they have it. I couldn't be more impressed with this app.",
            name: "RPM Digital"
        },
        {
            feedback: "I was looking for a bulk price editor that worked with smart collections, and finally found one that does the job. This app helped me save hours of work, and literally hundreds of dollars by correcting pricing/discount errors of my products. Their flash sales reports post-promotions are also really useful and convenient. The Konigle team is awesome at addressing all the concerns I had. Would highly recommend to anyone else.",
            name: "T-shirt store"
        },
        {
            feedback: "I think you guys have got a very good app… I recommended you to my client who I would like you to get in direct touch with.",
            name: "Art"
        },

        
    ]

  return (
    <div className='testimonials-main top-padding'>
        <h1 className='testimonials-heading'>Customer testimonials</h1>
        <p className='testimonials-para'>Here's what our customers have to say about Konigle.</p>
        <div className='testimonial-AllCards'>
        {
            customers.map((entry, index) => (
                <div key={index} className="customer-feedback w-full">
                    <p className='customer-entry-feedback'>{entry.feedback}</p>
                    <h6 className='customer-entry-name'>{entry.name}</h6>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Testimonials