import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Productitem from "./Productitem";
import { render, render2 } from "./../Action/action";
import { useDispatch } from "react-redux";


const Productpage = () => {
  const dispatch = useDispatch();
  const [pizza, setPizza] = useState([]);
  const [burger, setBurger] = useState([]);

  const get_data = async () => {
    const response = await axios.get("http://localhost:4321/Food/getAll");

    setPizza(response.data[1]);
    setBurger(response.data[0]);
    console.log(response.data);

    dispatch(render(response.data[0].subItemsData));
    dispatch(render2(response.data[1].subItemsData));
  };

  useEffect(() => {
    get_data()
  },[]);

  return (
    <div className="container d-flex  justify-content-center">
      <Productitem
        pizzaimage={pizza.image}
        pizzaname={pizza.name}
        burgername={burger.name}
        burgerimage={burger.image}
      />
    </div>
  );
};

export default Productpage;
