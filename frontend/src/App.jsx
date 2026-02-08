import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About' // Import About component
import ProductDetails from './pages/ProductDetails' // Import ProductDetails
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Navbar from './components/layout/Navbar'
import FooterSection from './components/layout/FooterSection'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} /> {/* Route for ProductDetails */}
        <Route path="/cart" element={<Cart />} /> {/* Route for Cart */}
        <Route path="/checkout" element={<Checkout />} /> {/* Route for Checkout */}
        <Route path="/profile" element={<Profile />} /> {/* Route for Profile */}
        <Route path="/about" element={<About />} /> {/* Route for About page */}
      </Routes>
      <FooterSection />
    </>
  )
}

export default App
