import React from 'react';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './SharedComponents/Header/Navigation';
import './App.css'
import Shop from './Components/Shop/Shop';
import Footer from './SharedComponents/Footer/Footer';
import ProductDetailDiv from './Components/ProductDetailDiv/ProductDetailDiv';

const App = () => {
    return (
             <BrowserRouter>
             <Navigation/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path="/shop" element={<Shop/>} />
                    <Route path='/shop/:productID' element={<ProductDetailDiv/>} />
                </Routes>
                <Footer/>
             </BrowserRouter>
    );
};

export default App;