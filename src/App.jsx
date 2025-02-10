import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  About from "./Page/About";
import  Contact from "./Page/Contact";
import Home from "./Page/Home";
import Product from "./Page/Product";
import Header from './Components/Header';


const App = () => {
  return (
    <div className='bg-zinc-900 min-h-screen text-white '>
      <Header />
      <Routes>
        <Route path='/abouttt' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
      </Routes>

      
    </div>
  )
}

export default App
