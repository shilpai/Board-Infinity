import React from "react";

export default function Item({cart, setCart,productId, productImage, productName, productDesc, productPrice, productDiscount}) {
  
  function addToCart(id) {
    let newList = [...new Set([...cart,id])]
    setCart([...newList])

  }

  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={productImage} className="card-img-top product-image" alt={productName} />
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-text">
          {productDesc}
        </p>
        <h6 className="price">Price: Rs.{productPrice} <strike className="text-muted discount">Rs.{productDiscount}</strike></h6>
        <button onClick={()=>addToCart(productId)} className="btn btn-primary w-100">Add to Cart</button>
      </div>
    </div>
  );
}
