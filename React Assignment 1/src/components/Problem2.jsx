import React from 'react'
import { useState } from "react";
import "../css/Problem2.css";
import ShoppingPage from './ShoppingPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cart from './Cart';

export default function Problem2() {
  const [cart,setCart] = useState([])
  const navigate = useNavigate()

  return (
    <>
    <header className='cart-header'>
          <div onClick={() => navigate('/')} className='shopping-cart'>Shopping Cart</div>
          <div onClick={() => navigate('/cart')} className='cart-logo'><i className="fa-solid fa-shopping-cart"></i>{cart.length}</div>
      </header>

        <Routes>
          <Route path='/' element={<ShoppingPage cart={cart} setCart={setCart} /> } />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
  
    </>
  )
}
