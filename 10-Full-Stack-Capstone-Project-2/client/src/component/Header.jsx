import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((state) => state.foodReducer3.basket3);
  return (
    <div>
      <div className="header  d-flex bg-danger text-center align-item-center ">
        <h2 className="p-3 mb-2 mx-auto  fs-2 ">FOOD ORDER PORTAL</h2>
        <Link
          className="text-decoration-none"
          style={{ color: "black" }}
          to="/carts"
        >
          <div className="d-flex text-center  me-4 fs-3">
            <FaShoppingCart className="mt-4" />

            <span className="ms-2 mt-3">{items.length} </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
