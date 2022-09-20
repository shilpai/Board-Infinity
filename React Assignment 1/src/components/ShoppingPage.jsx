import React from 'react'
import { useState } from "react";
import "../css/Problem2.css";
import { items } from '../utils/cart-items'
import Item from './Item';

export default function ShoppingPage({cart,setCart}) {
  return (
    <div className='shop-main'>
        <h1>Our items</h1>
        <main className='items'>
          {items.map((val,index)=>(
            <Item cart={cart} setCart={setCart} key={index} productId={val.productId} productImage={val.productImage} productName={val.productName} productDesc={val.productDesc} productPrice={val.productPrice} productDiscount={val.productDiscount}/>      
          ))}
        </main>
    </div>
  )
}
