import React from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "./../Action/action";

const Burgeritems = ({ name, image, price, desc, indx, elem }) => {
  const dispatch = useDispatch();
  return (
    <div className="row my-2 card shadow-lg">
      <div className="col-7 mx-auto ">
        <div className="d-flex justify-content-between">
          <div>
            <p className="fw-bold mt-3">{name}</p>
            <p className="text-muted">${price}</p>
            <p className="text-muted">{desc}</p>
            <button
              className="btn btn-danger mb-2"
              onClick={() => dispatch(addtocart(indx, elem))}
            >
              Order Now
            </button>
          </div>
          <div className="mt-4 ">
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

export default Burgeritems;
