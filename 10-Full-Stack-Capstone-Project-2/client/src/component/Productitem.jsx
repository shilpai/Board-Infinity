import React from "react";
import { Link } from "react-router-dom";

const Productitem = ({
  pizzaname,
  pizzaimage,
  burgername,
  burgerimage,
  subData,
}) => {
  return (
    <>
      <div className="row mx-2">
        <Link
          className="text-decoration-none"
          style={{ color: "black" }}
          to="/pizza"
        >
          <div
            className="card shadow-lg  mt-4"
            style={{ width: "18rem", borderRadius: "20px", cursor: "pointer" }}
          >
            <img
              src={pizzaimage}
              className="card-img-top rounded-circle p-3 pointer"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                margin: "auto",
              }}
              alt="..."
            />
            <div className="card-body">
              <h5
                className="card-title text-center "
                style={{ textDecoration: "none" }}
              >
                {pizzaname}
              </h5>
            </div>
          </div>
        </Link>
      </div>

      <div className="row mx-2">
        <Link
          className="text-decoration-none"
          style={{ color: "black" }}
          to="/burger"
        >
          <div
            className="card shadow-lg  mt-4"
            style={{ width: "18rem", borderRadius: "20px", cursor: "pointer" }}
          >
            <img
              src={burgerimage}
              className="card-img-top rounded-circle p-3 pointer"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                margin: "auto",
              }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">{burgername}</h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Productitem;
