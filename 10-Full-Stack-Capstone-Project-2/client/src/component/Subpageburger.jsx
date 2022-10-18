import React from "react";

import { useSelector } from "react-redux";
import Burgeritems from "./Burgeritems";

const Subpageburger = () => {
  const items = useSelector((state) => state.foodReducer.basket);

  return (
    <div className="container">
      <div className="container">
        <p className="text-center fs-4 fw-bold m-2">{items.name}</p>
      </div>
      <hr />
      <div className="container">
        {items.subItems.map((elem, index) => {
          return (
            <Burgeritems
              key={index}
              name={elem.name}
              price={elem.price}
              desc={elem.description}
              image={elem.image}
              elem={elem}
              indx={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Subpageburger;
