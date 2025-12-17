import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/homepage/HomePage.page'
import Checkout from './pages/checkout/Checkout.page'
import Navbar from './components/navigation/Navbar.component'
import Order from './pages/order/Order.page'

function App() {
  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Order />} />
      
    </Routes>
    </>
  )
}

export default App
