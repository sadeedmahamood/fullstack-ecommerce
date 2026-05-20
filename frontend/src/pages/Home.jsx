import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import FeaturedProducts from '../components/Home/FeacturedProducts'
import Footer from '../components/Home/FooterSection'

const Home = () => {
  return (
    <div>
      <>
      <HeroSection/>
      <FeaturedProducts/>
      <Footer/>
      </>
    </div>
  )
}

export default Home