import React from 'react';
import './WhyKonigle.css';
import imageOne from '../../assets/One.png'
import imageTwo from '../../assets/Two.png'
import imageThree from '../../assets/Three.png'
import main from '../../assets/WhyKonigle.png'


const WhyKonigle = () => {
  return (
    <div className="why-konigle-container ">
      <h1 className="main-title top-padding">Why we built Konigle ?</h1>
      
      <div className="intro-section">
        <p className="highlight-text">
          Most people or businesses actually 'do not make' money online and we want to change it.
        </p>
      </div>

      <section className="content-section">
        <h2 className="section-title">Make 'real' money online.</h2>
        <p className="section-text">
          We began our journey in 2018, when we realized that most people do not make any 'real'
          money online and we were trying to help an amazon seller understand his sales data with a
          ChatGPT like bot. This started our journey into the wilderness to find a 'real' solution to 
          help enterprising people participate in the internet economy profitably.
        </p>
        
        <div className="image-grid">
          <img src={imageOne} alt="How to make money online" className="grid-image" />
          <img src={imageTwo} alt="Online business concept" className="grid-image" />
          <img src={imageThree} alt="Meaning of Konigle" className="grid-image" />
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">The wilderness</h2>
        <p className="section-text">
          As we kept iterating the Konigle product for the next 2.5 years we realized that there were 
          seven major strategies that needed to be implemented to make 'real' money online and the 
          best way Konigle could be helpful is to help make it as easy as possible to implement these 
          strategies for anyone looking to participate in the internet economy.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-title">Our first BFCM</h2>
        <p className="section-text">
          During BFCM 2021 our pricing tool that enabled online stores schedule price changes automatically and run 
          promotions turned out to be a hit. This coincided with our helpful guides system where help people make 'real' 
          money online starting to rank organically and getting 1000's of readers. This made us realize the key to 
          making 'real' money online was:
        </p>
        
        <ul className="strategy-list">
          <li><span className="bullet">●</span> Understanding your customer</li>
          <li><span className="bullet">●</span> Having a useful offering</li>
          <li>
            <span className="bullet">●</span> Regularly publishing useful content on your website 
            <span className="hint-text"> is the most profitable way to get visitors to come to your website to voice their curiosity and 
            eventually buy something from you, whether a product, software, service or pay you for your writing.</span>
          </li>
        </ul>

        <div className="dashboard-image">
          <img src={main} alt="The Konigle Website Builder Dashboard" className="full-width-image" />
          <p className="image-caption">The Konigle Website Builder Dashboard</p>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Everything you need to make 'real' money online</h2>
        <p className="section-text">
          The Konigle AI system is an AI website builder, email marketing platform and lots of other 
          features to help you make 'real' money online. Thank you for reading about our history & 
          hopefully you'll join thousands of other enterprising folks to give Konigle a try.
        </p>
        
        <div className="cta-section">
          <a href="#" className="cta-link">Start chatting and build your website using AI.</a>
          <p className="thank-you">Thank You</p>
        </div>
      </section>
    </div>
  );
};

export default WhyKonigle;