import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Which site is best for creating a website for beginners?",
      answer: "If it's your first time building a website, consider using Konigle, a zero-code A.I. website builder platform suitable for beginners.",
      learnMore: "LEARN MORE ABOUT KONIGLE"
    },
    {
      question: "How do I create a free website for beginners?",
      answer: "Try Konigle's A.I website builder! Just let TimBL AI know the information of the website you wish to build, and everything will be done for you.",
      learnMore: 'Try TimBL AI'
    },
    {
      question: "How much does it cost to hire someone to build a website?",
      answer:  `In Singapore, hiring someone to build a website can range from S$500 to S$50,000 or more.
                The main factors affecting the cost are:
                Website complexity: A simple one-page site is much cheaper than a full e-commerce store with custom features.
                Experience and location: Freelance developers might charge less than established agencies.`,
      learnMore: 'BUILD A WEBSITE FOR LESS'
    },
    {
      question: "How much should you pay to create a website?",
      answer:  `That depends on your needs! Here's a breakdown:
                Basic website (S$1,500-S$5,000): Perfect for a simple online presence with minimal features.
                Small business website (S$2,000–S$10,000): ideal for showcasing services, portfolios, and capturing leads.
                E-commerce website (S$5,000+): accommodates online selling with secure payment gateways and product management.
                This is just a ballpark figure. Consider your budget and website goals to find the right fit. If you require assistance, reach out to us!`,
learnMore: 'CONTACT US'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container top-padding">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <button 
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className={`faq-arrow ${openIndex === index ? 'open' : ''}`}>
              ▼
            </span>
          </button>
          <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
            <div className="faq-content">
              <p>{faq.answer}</p>
              {faq.learnMore && (
                <a href="#" className="learn-more">
                  {faq.learnMore}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;