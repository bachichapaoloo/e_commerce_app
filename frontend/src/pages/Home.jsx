import React from 'react'
import BannerHome from '../components/BannerHome'
import CategorySection from '../components/CategorySection'
import FeaturedProducts from '../components/FeaturedProducts'

export const Home = () => {
  return (
    <div>
      <BannerHome />
      <CategorySection />
      <FeaturedProducts />
    </div>
  )
}

export default Home