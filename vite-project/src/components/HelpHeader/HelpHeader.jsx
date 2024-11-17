import React from 'react'
import './HelpHeader.css'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

function HelpHeader() {
  const [showDropdownOfHelp, setShowDropdownOfHelp] = useState(false);
  const [searchDropdownOfHelp, setSearchDropdownOfHelp] = useState(false);
  return (
    <div className='help-header'>
      <div className='help-headers'>
        <h1 className='help-header-heading'>Konigle</h1>
        <ul className='help-header-navlinks'>
          <Link to='/' className='help-header-links'>Home</Link>
          <div className='helpheader-dropdown-container'>
          <NavLink 
              className='help-header-links' 
              onClick={(e) => {
                e.preventDefault();
                setShowDropdownOfHelp(!showDropdownOfHelp);
              }}
            >
              Categories
            </NavLink>
            {showDropdownOfHelp && (
              <ul className='dropdown-menu'>
                <li><Link to='' className='dropdown-item dropdownOne'>Website Builder</Link></li>
                <li><Link to='' className='dropdown-item dropdownTwo'>Shopify App</Link></li>
                <li><Link to='' className='dropdown-item dropdownThree'>Shopee</Link></li>
              </ul>
            )}
          </div>
        </ul> 
      </div>
      
      <div className='help-headers'>
        <NavLink to="/helpquestion" className='help-header-btn'>Ask A Question</NavLink>
        <div className='help-header-search'>
          <i onClick={() => setSearchDropdownOfHelp(!searchDropdownOfHelp)} className='ri-search-line'></i>
            {searchDropdownOfHelp && (
              <div className="helpHeader-searchPage-overlay">
                <div className="helpHeader-searchPage">
                  <div className="search-header">
                    <h1 className="helpHeader-searchPage-heading">Search</h1>
                    
                    <div className="close-search">
    <span className="close-text">Close</span>
    <i onClick={() => setSearchDropdownOfHelp(false)} className="ri-close-line cross-icon"></i>
</div>
                  </div>
                  <div className="search-input-container">
                    <input type="text" className='helpSearch' placeholder='Search anything' />
                      <i className="ri-search-line search-icon"></i>
                      <i className="ri-arrow-right-line submit-icon"></i>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default HelpHeader