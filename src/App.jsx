import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
    <ScrollToTop />
    <Header />
    <Outlet />
    <Footer />
     
    </>
  )
}

export default App
