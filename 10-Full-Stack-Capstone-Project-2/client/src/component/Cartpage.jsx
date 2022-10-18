import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cartitem from "./Cartitem";
import { emptycart } from "../Action/action";
import { Link } from "react-router-dom";

const Cartpage = () => {
  const items = useSelector((state) => state.foodReducer3.basket3);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        {items.length === 0 ? (
          <p className="text-center fs-2 fw-bold m-2">Cart is Empty</p>
        ) : (
          <div>
            <div className="container">
              <p className="text-center fs-4 fw-bold m-2">You Have Ordered </p>
            </div>
            <hr />
            <div className="container">
              {items.map((elem, index) => (
                <Cartitem
                  elem={elem}
                  key={index}
                  index={index}
                  name={elem.name}
                  price={elem.price}
                  desc={elem.description}
                  image={elem.image}
                />
              ))}
              <div className="container text-center mb-5 mt-2">
                <Link to="/">
                  <button
                    className="btn btn-danger "
                    onClick={() => dispatch(emptycart())}
                  >
                    Place Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cartpage;
