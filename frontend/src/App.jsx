import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About' // Import About component
import ProductDetails from './pages/ProductDetails' // Import ProductDetails
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Contact from './pages/Contact'; // Import Contact component
import Navbar from './components/layout/Navbar'
import FooterSection from './components/layout/FooterSection'
import { Toaster } from 'sonner';

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
        <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
      </Routes>
      <FooterSection />
      <Toaster
        position="top-right"
        richColors={false}
        toastOptions={{
          style: {
            background: 'white',
            color: 'black',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            fontFamily: 'sans-serif',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            padding: '16px 20px',
            fontSize: '16px',
            fontWeight: '500',
            minWidth: '320px'
          },
          className: 'wrapper-toast',
          success: {
            iconTheme: {
              primary: 'black',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: 'white',
            },
          },
        }}
      />
    </>
  )
}

export default App
