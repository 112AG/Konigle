import React from 'react';
import './DEMO.css'; // Assuming this is your CSS file

const DEMO = () => {
  return (
    <div className="demo-container">
      {/* Breadcrumb */}
      <div className="demo-breadcrumb">
        <span>Website</span>
        <span>/</span>
        <span>Website Builder</span>
        <span>/</span>
        <span>Website Builder Demo</span>
      </div>

      {/* Main Content */}
      <main className="demo-main-content">
        <div className="demo-content-grid">
          {/* Left Column */}
          <div className="demo-main-column">
            <h1>Website Builder Demo</h1>
            <div className="demo-date">10 Jan, 2024</div>
            
            <div className="demo-info-box">
              <p>
                Watch a demo of a powerful yet simple to use website builder called Konigle.
              </p>
            </div>

            <h2>Website Builder Demo</h2>
            <p className="demo-description">
              Here's an ~ 8 minute demo of a powerful website builder, powered by
              generative AI to make the job of building a technically correct website and
              maintaining it very easy.
            </p>

            {/* Video Placeholder */}
            <div className="video-demo-container">
              <iframe 
              className='video-demo-container' 
              src="https://youtu.be/C30qGhowvWw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
          ></iframe>
            </div>
          </div>

          {/* Right Column - Newsletter Signup */}
          <div className="demo-sidebar">
            <h3>Join 10,000+ people and get insights to make money from your website</h3>
            <p>Sign up for our newsletter.</p>
            <button className="demo-subscribe-button">Subscribe now</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DEMO;