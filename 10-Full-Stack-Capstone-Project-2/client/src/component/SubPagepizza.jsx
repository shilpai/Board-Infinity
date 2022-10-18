import React from "react";
import Pizzaitems from "./Pizzaitems";
import { useSelector } from "react-redux";
const SubPagepizza = () => {
  const items = useSelector((state) => state.foodReducer2.basket2);

  return (
    <div className="container">
      <div className="container">
        <p className="text-center fs-4 fw-bold m-2">{items.name}</p>
      </div>
      <hr />
      <div className="container">
        {items.subItems.map((elem, index) => {
          return (
            <Pizzaitems
              elem={elem}
              key={index}
              indx={index}
              name={elem.name}
              price={elem.price}
              desc={elem.description}
              image={elem.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SubPagepizza;
