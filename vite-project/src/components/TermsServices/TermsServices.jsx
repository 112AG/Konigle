import React from 'react';
import './TermsServices.css';

const TermsServices = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-main-title">Terms Of Service</h1>
      <p className="section-text">Please Read these terms and conditions carefully before using Our Service.</p>
      
      <section className="privacy-section">
        <h2 className="privacy-subtitle">Interpretation and Definitions</h2>
        
        <h3 className="section-title">Interpretation</h3>
        <p className="section-text">
          The words of which the initial letter is capitalized have meanings defined under the following conditions. 
          The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>

        <h3 className="section-title">Definitions</h3>
        <p className="section-text">For the purposes of these Terms and Conditions:</p>
        <ul className="section-list">
          <li><b>Affiliate</b> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
          <li><b>Country</b> refers to: Singapore</li>
          <li><b>Company</b> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Konigle Pte Ltd, 3 Shenton Wy, #12-04A, Singapore 068805.</li>
          <li><b>Device</b> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
          <li><b>Service</b> refers to the Website.</li>
          <li><b>Terms and Conditions</b> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
          <li><b>Third-party Social Media Service</b> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
          <li><b>Website</b> refers to Konigle Help Centre, accessible from https://help.konigle.com/</li>
          <li><b>You</b> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h3 className="section-title">Acknowledgment</h3>
        <p className="section-text">
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
        </p>
        <p className="section-text">
          Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
        </p>
        <p className="section-text">
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
        </p>
        <p className="section-text">
          You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
        </p>
      </section>

      {/* Additional sections following the same pattern */}
      
      <section className="privacy-section">
        <h3 className="section-title">Contact Us</h3>
        <p className="section-text">
          If you have any questions about these Terms and Conditions, You can contact us:
        </p>
        <p className="section-text">
          By email: <a href="mailto:info@konigle.com" className="contact-link">info@konigle.com</a>
        </p>
        <p className="section-text">
          By visiting this page on our website:{' '}
          <a href="https://help.konigle.com/pages/contact" className="contact-link">
            https://help.konigle.com/pages/contact
          </a>
        </p>
      </section>
    </div>
  );
};

export default TermsServices;