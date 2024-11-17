import React from 'react'
import ThirdHeader from './ThirdHeader/ThirdHeader'
import Footer from './Footer/Footer'  
import { Outlet } from 'react-router-dom'  
import ScrollToTop from './ScrollToTop'

function NewLayout() {
  return (
    <div>
      <ScrollToTop />
      <ThirdHeader />
      <Outlet />
      <Footer />
    </div>
  )
}

export default NewLayout

