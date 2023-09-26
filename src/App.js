import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Footer from './components/Footer';
import Contact from './components/contact/Contact';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/collections' element={<Collection />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
