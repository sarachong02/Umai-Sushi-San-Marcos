import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTopButton from './components/goTopBtn/goTopBtn';
import StartAtTop from './components/StartAtTop/StartAtTop';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Delivery from './pages/Delivery/Delivery';
import Contact from './pages/Contact/Contact';
import Order from "./pages/Order/Order";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import OrderNavbar from './components/OrderNavBar/OrderNavBar';

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === '/order' ? <OrderNavbar /> : <Navbar />}

      <StartAtTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
