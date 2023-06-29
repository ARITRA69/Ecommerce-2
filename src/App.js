import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About';
import Contact from './pages/Contact'
import PaymentDone from './pages/PymentDone'
import Checkout from './pages/Checkout'


const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/paymentdone' element={<PaymentDone />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
