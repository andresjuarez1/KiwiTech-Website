import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './Navbar.jsx'
import './styles/index.css'
import HeroSection from './HeroSection.jsx'
import OurServices from './OurServices.jsx'
import AboutUs from './AboutUs.jsx'
import Cards from './Cards.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <HeroSection />
    <OurServices />
    <AboutUs />
    <Cards />
  </React.StrictMode>,
)
