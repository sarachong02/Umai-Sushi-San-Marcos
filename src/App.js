import React from 'react'
import ScrollToTopButton from './components/goTopBtn/goTopBtn'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Delivery from './pages/Delivery/Delivery'
import Contact from './pages/Contact/Contact'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer>
        Footer
      </Footer>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
