import React from 'react'
import HelpHeader from '../HelpHeader/HelpHeader'  
import HelpFooter from '../HelpFooter/HelpFooter'  
import { Outlet } from 'react-router-dom'  
import ScrollToTop from '../ScrollToTop'

function HelpLayout() {
  return (
    <div>
      <ScrollToTop />
      <HelpHeader />
      <Outlet />
      <HelpFooter />
    </div>
  )
}

export default HelpLayout