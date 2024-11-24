import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SpecialOffers from '../components/SpecialOffers'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='home'>
        <Hero />
        <SpecialOffers />
      </div>
        <Footer />
    </div>
  )
}

export default Home