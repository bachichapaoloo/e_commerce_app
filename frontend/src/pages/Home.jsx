import React from 'react'
import HeroSlider from '../components/sections/HeroSlider'
import CategorySection from '../components/sections/CategorySection'
import FeaturedProducts from '../components/product/FeaturedProducts'

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