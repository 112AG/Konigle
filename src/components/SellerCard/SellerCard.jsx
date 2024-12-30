import React, { useState } from 'react';
import './SellerCard.css'

const SellerCard = ({ title, description, setupTime, icon, saveTime = false }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div 
        className="tool-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="tool-card-content">
          {saveTime && <span className="save-time-badge">SAVE TIME</span>}
          <img src={icon} alt={title} className="tool-icon" />
          <h3 className="tool-title">{title}</h3>
          <p className="tool-description">{description}</p>
          <p className="setup-time">Less than {setupTime} minutes to setup</p>
          
          {isHovered && (
            <div className="tool-buttons">
              <button className="start-button">Start for free</button>
              <button className="details-button">Details</button>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default SellerCard;