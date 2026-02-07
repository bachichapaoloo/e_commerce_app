import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Navbar from './components/Navbar'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <FooterSection />
    </>
  )
}

export default App
