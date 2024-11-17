import React from 'react';
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-main-title">Privacy Policy</h1>
      
      <h2 className="privacy-subtitle">Privacy Policy for Konigle Help Centre</h2>
      
      <section className="privacy-section">
        <h3 className="section-title">Introduction</h3>
        <p className="section-text">
          Konigle Help Centre ("we", "us", "our") understands and respects your concerns 
          about privacy. This Privacy Policy outlines the types of personal information 
          we collect, why we collect it, how we use it, and when we share it with third 
          parties.
        </p>
      </section>

      <section className="privacy-section">
        <h3 className="section-title">Information We Collect</h3>
        <p className="section-text">
          We collect various types of personal information from you, including:
        </p>
        <ol className="section-list">
          <li>Personal contact details, such as your name, email address, and telephone 
              number, which you provide to us when you create an account, request a 
              quotation, or contact us through our website</li>
          <li>Account information, such as your username, password, and other 
              identifiers or credentials necessary to authenticate and access your account</li>
          <li>Analytics data, such as your IP address, browser type, operating system, 
              referring web page, pages visited, location, mobile carrier, device and 
              application IDs, and search terms</li>
        </ol>
      </section>

      <section className="privacy-section">
        <h3 className="section-title">How We Use Your Information</h3>
        <p className="section-text">
          We use your personal information for the following purposes:
        </p>
        <ol className="section-list">
          <li>To respond to your requests for quotations and provide you with the 
              services you request.</li>
          <li>To communicate with you about our services, and to send you updates, 
              security alerts, and support messages.</li>
          <li>To operate, protect, improve, and optimize our website and services, such 
              as by performing analytics and conducting research.</li>
        </ol>
      </section>

      <section className="privacy-section">
        <h3 className="section-title">Information Sharing and Disclosure</h3>
        <p className="section-text">
          We do not sell or rent your personal information to third parties. We may 
          disclose your personal information to:
        </p>
        <ol className="section-list">
          <li>Comply with any applicable law, regulation, legal process, or 
              governmental request.</li>
          <li>Protect our rights, property, or safety, and that of our users and the public, 
              including to detect, prevent, or otherwise address fraud, security, or 
              technical issues.</li>
        </ol>
      </section>

      <section className="privacy-section">
        <h3 className="section-title">Your Choices</h3>
        <p className="section-text">
          You may choose to limit the personal information you provide to us, but if you 
          withhold requested information, we may not be able to provide you with 
          certain services.
        </p>
      </section>

      <section className="privacy-section">
        <h3 className="section-title">Changes to Our Privacy Policy</h3>
        <p className="section-text">
          We may modify this Privacy Policy from time to time. We will post any 
          changes on this page and, if they are significant, we will provide a more 
          prominent notice.
        </p>
      </section>

      <section className="privacy-section">
        <h3 className="section-title">Contact Us</h3>
        <p className="section-text">
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:info@konigle.com" className="contact-link">info@konigle.com</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;