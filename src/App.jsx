import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import FAQ from './pages/faq'
import Overview from './pages/overview'
import Privacy from './pages/privacy_terms'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/privacy' element={<Privacy />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
