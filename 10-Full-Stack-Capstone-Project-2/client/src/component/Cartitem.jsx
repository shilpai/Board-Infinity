import React from "react";
import { removecart } from "../Action/action";
import { useDispatch } from "react-redux";

const Cartitem = ({ name, image, price, desc, index }) => {
  const dispatch = useDispatch();
  return (
    <div className="row my-2 card shadow-lg">
      <div className="col-7 mx-auto ">
        <div className="d-flex justify-content-between ">
          <div>
            <p className="fw-bold mt-3">{name}</p>
            <p className="text-muted">${price}</p>
            <p className="text-muted">{desc}</p>

            <button
              className="btn btn-danger mb-2"
              onClick={() => dispatch(removecart(index))}
            >
              Remove
            </button>
          </div>
          <div className="mt-3">
            <img
              className="rounded"
              src={image}
              alt="..."
              style={{ width: "230px", height: "180px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
