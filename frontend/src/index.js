import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import HomePage from './Landing_page/Home/HomePage';
import Signup from './Landing_page/signup/Signup';
import About from './Landing_page/about/AboutPage';
import Product from './Landing_page/products/ProductPage';
import Pricing from './Landing_page/pricing/PricingPage';
import Support from './Landing_page/support/SupportPage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Products' element={<Product/>}></Route>
    <Route path='/Pricing' element={<Pricing/>}></Route>
    <Route path='/Support' element={<Support/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

