import React from "react";
import { items } from "../utils/cart-items";

export default function Cart({ cart, setCart }) {
  function removeFromCart(id) {
    let newList = cart.filter((item) => item !== id);
    setCart([...newList]);
    console.log(newList);
  }

  return (
    <div className='cart-items'>
      {items.map((val, index) => {
        if (cart.includes(val.productId)) {
          return (
            <div
              key={index}
              className="cart-card gap-2 d-flex align-items-center justify-content-between"
            >
              <div className='cart-left'>
                <img src={val.productImage} className="product-image" alt={val.productName} />
                <div className='cart-mid'>
                  <h5 className="card-title">{val.productName}</h5>
                  <p>{val.productDesc}</p>
                  <h6 className='price'>Rs. {val.productPrice}</h6>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(val.productId)}
                className="btn btn-danger"
              >
                Remove
              </button>
            </div>
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}
