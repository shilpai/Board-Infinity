export const render = (data) => {
  return {
    type: "RENDER",
    payload: data,
  };
};

export const render2 = (data2) => {
  return {
    type: "RENDER_2",
    payload: data2,
  };
};

export const addtocart = (indx, elem) => {
  return {
    type: "ADD_TO_CART",
    payload: { indx, elem },
  };
};

export const removecart = (index) => {
  return {
    type: "REMOVE_CART",
    payload: index,
  };
};

export const emptycart = () => {
  return {
    type: "EMPTY",
  };
};
