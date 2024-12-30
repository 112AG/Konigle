import React from 'react'
import './Header.css' 
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const handleLanguageChange = (e) => {
    console.log('Language changed to:', e.target.value);
  };
  const handleMenuIcon = () => {
    const nav = document.querySelector('.header-nav');
    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
  }

  return (
    <div className='header-div'>
      <h1 className='header-logo'>Konigle</h1>
      <div className='header-nav'>
        <select 
          className='language-selector def-button-white head-btn'
          onChange={handleLanguageChange}
          defaultValue="en"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
          <option value="nl">Nederlands</option>
          <option value="ru">Русский</option>
          <option value="zh">中文</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="ar">العربية</option>
          <option value="hi">हिन्दी</option>
          <option value="tr">Türkçe</option>
          <option value="pl">Polski</option>
          <option value="vi">Tiếng Việt</option>
        </select>
        <NavLink to="/login" className='def-button-white head-btn'>Login</NavLink>
        <NavLink to="/createwebsite" className='def-button-blue head-btn'>Make a Website</NavLink>
      </div>
      <div className='header-icon-menu' onClick={handleMenuIcon}>
        <i className="ri-menu-line"></i>
      </div>
    </div>
  )
}
export default Header