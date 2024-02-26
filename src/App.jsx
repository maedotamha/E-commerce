import { useState } from 'react';
import './App.css';

import { Navbar } from './components/Navbar/Navbar';

import{ BrowserRouter, Routes , Route} from 'react-router-dom';
import { ShopCatagories } from './pages/ShopCatagories';
import { LoginSignup } from './pages/LoginSignup';
import { Shop } from './pages/Shop';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Footer } from './components/footer/Footer';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Shop/>} />
        <Route path = '/mens' element = {<ShopCatagories category = "men"/>} />
        <Route path = '/womens' element = {<ShopCatagories category = "women"/>} />
        <Route path = '/kids' element = {<ShopCatagories category = "kid"/>} />

        <Route path = "product" element = {<Product/>}/>
        <Route path = ':productId' element = { <Product/>} />

        <Route path = '/login' element = {<LoginSignup/>} />
        <Route path = '/cart' element = {<Cart/>}/>
        

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
