import React, { useState } from 'react';
import './Pricing.css'; // Import the CSS file for styling

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePricingType = () => {
    setIsMonthly(!isMonthly);
  };

  const Pricings = [
    {
      title: 'Blogger',
      monthlyPrice: 35,
      monthlyTiming: 'per month for 1 blog',
      annualPrice: 348, // Assuming annual price is 12x monthly
      annualTiming: '$29/m paid yearly',
      pricesHeading: 'For bloggers and content creators',
      features: [
        'AI-powered website builder',
        'Modern professional website',
        'Built-in SEO and performance',
        'Mobile friendly',
        'Social media integration',
        'Built in blog, website glossary, analytics, and more',
        'Collect leads, run newsletterFree SSL certificateCDN and hoisting'
      ],
      buttonText: 'Signup',
    },
        // Add here other card details.
    

    {
        title: 'Standard',
        monthlyPrice: 129,
        monthlyTiming: 'per month for 1 website',
        annualPrice: 1188,
        annualTiming: '$99/m paid yearly',
        pricesHeading: 'For businesses who want to grow online without Ads.',
        features: [
            'Everything in the Blogger plan',
            'Free website migration (for annual plan)',
            'Online store features',
        ],
        buttonText: 'Signup',
        },
        {
        title: 'Premium',
        monthlyPrice: 199,
        monthlyTiming: 'per month for 1 website',
        annualPrice: 5099,
        annualTiming: '5099 paid every 3 years',
        pricesHeading: 'For businesses who want to grow onlinw without Ads',
        features: [
            'Everything in the Standard plan',
            'Priority support',
            'Unlimited Email and SMS marketing',
        ],
        buttonText: 'Signup',
        },
        {
        title: 'Enterprise',
        monthlyPrice: 'Contact Us',
        monthlyTiming: 'For Pricing',
        annualPrice: 'Contact Us',
        annualTiming: 'For Pricing',
        pricesHeading: 'For businesses & agencies who want to partner with us.',
        features: [
            'Create, host & manage multiple websites at scale',
            'Contact us for enterprise pricing and affiliate referral program',
        ],
        buttonText: 'Signup',
        },
  ];

  return (
    <div className="pricing-section">
        <h1 className='pricing-topHeading'>Sign up for <span className='help-feature-card-blue'>Konigle</span></h1>
        <p className='help-feature-card-blue pricing-para'>The Simpler Wordpress alternative</p>
    <div className="pricing-header">
        <button className={`pricing-button ${isMonthly ? 'active' : ''}`} onClick={togglePricingType}>
          {isMonthly ? 'Monthly' : 'Annually'}
        </button>
    </div>

      <div className="pricing-plans">
        {Pricings.map((plan, index) => (
          <div key={index} className="pricing-plan">
            <h3 className='pricing-title'>{plan.title}</h3>
            <div className="price">
              ${isMonthly ? plan.monthlyPrice : plan.annualPrice}
              <span>{isMonthly ? '/month' : '/year'}</span>
            </div>
            <button className="signup-button">{plan.buttonText}</button>
            <ul className="features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className='pricing-end-para'>Already running an online store?</p>
      <div className='app-link-btn'>
        <button className='pricing-app-link-btn'>Connect Shopify store</button>
        <button className='pricing-app-link-btn'>Connect Shopee store</button>
      </div>
    </div>
  );
}

export default Pricing;



// import React, { useState } from 'react';
// import './Pricing.css'; // Import the CSS file for styling

// function Pricing() {
//   const [isMonthly, setIsMonthly] = useState(true);

//   const togglePricingType = () => {
//     setIsMonthly(!isMonthly);
//   };

//   const Pricings = [
//     {
//       title: 'Blogger',
//       monthlyPrice: 35,
//       annualPrice: 396, // Assuming annual price is 12x monthly
//       features: [
//         'AI-powered website builder',
//         'Modern professional website',
//         'Built-in SEO and performance',
//       ],
//       buttonText: 'Signup',
//     },
//     {
//       title: 'Standard',
//       monthlyPrice: 129,
//       annualPrice: 1488,
//       features: [
//         'Everything in the Blogger plan',
//         'Free website migration (for annual plan)',
//         'Online store features',
//       ],
//       buttonText: 'Signup',
//     },
//     {
//       title: 'Premium',
//       monthlyPrice: 199,
//       annualPrice: 2388,
//       features: [
//         'Everything in the Standard plan',
//         'Priority support',
//         'Unlimited Email and SMS marketing',
//       ],
//       buttonText: 'Signup',
//     },
//     {
//       title: 'Enterprise',
//       monthlyPrice: 'Contact Us',
//       annualPrice: 'Contact Us',
//       features: [
//         'Create, host & manage multiple websites at scale',
//         'Contact us for enterprise pricing and affiliate referral program',
//       ],
//       buttonText: 'Signup',
//     },
//   ];

//   return (
//     <section className="pricing-section top-padding">
//       <div className="pricing-header">
//         <button className={`pricing-button ${isMonthly ? 'active' : ''}`} onClick={togglePricingType}>
//           Monthly
//         </button>
//         <button className={`pricing-button ${!isMonthly ? 'active' : ''}`} onClick={togglePricingType}>
//           Annually
//         </button>
//       </div>

//       <div className="pricing-plans">
//         {Pricings.map((plan, index) => (
//           <div key={index} className="pricing-plan">
//             <h3>{plan.title}</h3>
//             <div className="price">
//               ${isMonthly ? plan.monthlyPrice : plan.annualPrice}
//               <span>{isMonthly ? '/month' : '/year'}</span>
//             </div>
//             <ul className="features">
//               {plan.features.map((feature, featureIndex) => (
//                 <li key={featureIndex}>{feature}</li>
//               ))}
//             </ul>
//             <button className="signup-button">{plan.buttonText}</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Pricing;
