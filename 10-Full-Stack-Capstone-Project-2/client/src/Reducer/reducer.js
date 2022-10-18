const intialState = {
  basket: [],
};
const intialState2 = {
  basket2: [],
};
const intialState3 = {
  basket3: [],
};

const foodReducer = (state = intialState, action) => {
  switch (action.type) {
    case "RENDER":
      return {
        ...state,
        basket: action.payload,
      };

    default:
      return state;
  }
};

const foodReducer2 = (state = intialState2, action) => {
  switch (action.type) {
    case "RENDER_2":
      return {
        ...state,
        basket2: action.payload,
      };

    default:
      return state;
  }
};

const foodReducer3 = (state = intialState3, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket3: [...state.basket3, action.payload.elem],
      };

    case "REMOVE_CART":
      let baski = state.basket3;
      const temp = baski.filter((ele, index) => index !== action.payload);

      return {
        ...state,
        basket3: temp,
      };

    case "EMPTY":
      return {
        ...state,
        basket3: [],
      };

    default:
      return state;
  }
};

export { foodReducer, foodReducer2, foodReducer3 };
