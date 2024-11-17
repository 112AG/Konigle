import React, { useState } from 'react';
import './SellerTool.css';
import SellerCard from '../SellerCard/SellerCard'

// I want to see ai that how  it can work or help to solve and the result is much better . it makes work faster to complete the tasks (that a good tool for a developer to worl with efficiently and deploy fast) gpt.

const Dropdown = ({ header, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    if (option.toLowerCase().includes('clear')) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`dropdown-button ${isOpen ? 'active' : ''}`}
      >
        <span>{selectedOption || header}</span>
        <svg
          className={`dropdown-arrow ${isOpen ? 'rotate' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" fill="currentColor" />
        </svg>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SellerTool = () => {
  const [filters, setFilters] = useState({
    platform: null,
    category: null,
    need: null
  });

  const dropdowns = [
    {
      header: "Filter by Store Platform",
      options: ["Shopify", "Shopee", "Clear filter"]
    },
    {
      header: "Category",
      options: [
        "Pricing & Promotions",
        "Competition Tracking",
        "Customers & Loyalty",
        "Order Management",
        "SEO",
        "Stock Management",
        "Clear Filters"
      ]
    },
    {
      header: "Filter by need",
      options: ["Save time", "Cut Costs", "Increase Sales", "Clear filters"]
    }
  ];

  const tools = [
    {
      title: "Shopify Bulk Price Editor",
      description: "The most powerful bulk price editor for your Shopify stores. Bulk edit prices, run promotions.",
      setupTime: "3",
      icon: "https://cdn.konigle.com/shopify-logo.svg",
      saveTime: true
    },
    {
      title: "Abandoned Cart Recovery",
      description: "Human powered SMS abandoned cart recovery for your online store.",
      setupTime: "3",
      icon: "https://cdn.konigle.com/shopify-logo.svg"
    },
    {
      title: "Automatic Price Correction",
      description: "Detect undesired price changes and automatically correct the price on your online store.",
      setupTime: "3",
      icon: "https://cdn.konigle.com/shopify-logo.svg",
      saveTime: true
    },
    {
      title: "Competitor Price Tracking",
      description: " Improve your profit margins by tracking your competitor prices with ease.",
      setupTime: "4",
      icon: "https://cdn.konigle.com/shopify-logo.svg",
    },
    {
      title: "Store-wide Flash Sale",
      description: "Run flash sales across your online store within minutes.",
      setupTime: "5",
      icon: "https://cdn.konigle.com/shopify-logo.svg",
      saveTime: true
    },
    {
      title: "Connect Xero and Shopee",
      description: "The simplest way to connect your Shopee store and Xero. Within a few clicks export shopee...",
      setupTime: "4",
      icon: ``,
      saveTime: true
    }
  ];

  return (
    <div className="seller-tool">
      <h1 className="sellertool-heading">Seller Tools for all your needs</h1>
      <p className="sellertool-para">
        With Konigle do more with less. Simple to use, powerful seller tools to help grow your store cost effectively.
      </p>

      <div className="sellertool-dropdown-container">
        {dropdowns.map((dropdown, index) => (
          <Dropdown
            key={index}
            header={dropdown.header}
            options={dropdown.options}
            onSelect={(option) => {
              const key = index === 0 ? 'platform' : index === 1 ? 'category' : 'need';
              setFilters(prev => ({
                ...prev,
                [key]: option.toLowerCase().includes('clear') ? null : option
              }));
            }}
          />
        ))}
      </div>

      <div className="tools-count">
        27 tools available
      </div>
      <div className="tools-grid">
          {tools.map((tool, index) => (
            <SellerCard
              key={index}
              title={tool.title}
              description={tool.description}
              setupTime={tool.setupTime}
              icon={tool.icon}
              saveTime={tool.saveTime}
            />
          ))}
        </div>
        <div className="last-content">
          <p className='seller-para'>Could not find what you are looking for?</p>
          <button className='seller-bottm-btn'>Request a tool </button>
        </div>
    </div>
  );
};

export default SellerTool;