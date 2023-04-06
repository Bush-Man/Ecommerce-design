import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Navbar from '../../Components/Navbar/Navbar'
import BodySection from "../../Components/BodySection/BodySection.jsx"
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
      
    <div>
      
      <Navbar />
      <HeroSection />
      <BodySection />
      <Footer />
    </div>
    </>
  )
}

export default Home