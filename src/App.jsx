import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/homepage/HomePage.page'
import Checkout from './pages/checkout/Checkout.page'
import Navbar from './components/navigation/Navbar.component'

function App() {
  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      
    </Routes>
    </>
  )
}

export default App
