import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Footer from './components/Footer';
import Contact from './components/contact/Contact';
import Blog from './pages/Blog/Blog';
import Cart from './components/cart/Cart';
import Partners from './components/Partners';

export const ProductsContext = createContext({});
function App() {
  const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
  const [products, setProducts] = useState(existingProducts);
  
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <div className='App'>
        <Router basename={'/qa-2'}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/collections' element={<Collection />} />
            
            <Route path='/blog' element={<Blog />} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
