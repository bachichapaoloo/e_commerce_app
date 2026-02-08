import React from 'react'
import HeroSlider from '../components/HeroSlider'
import CategorySection from '../components/CategorySection'
import FeaturedProducts from '../components/FeaturedProducts'

export const Home = () => {
  return (
    <div>
      <HeroSlider />
      <CategorySection />
      <FeaturedProducts />
    </div>
  )
}

export default Home