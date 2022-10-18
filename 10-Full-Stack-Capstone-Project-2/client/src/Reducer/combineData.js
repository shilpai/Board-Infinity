import { combineReducers } from "redux";
import { foodReducer, foodReducer2, foodReducer3 } from "./reducer";

const rootReducer = combineReducers({
  foodReducer,
  foodReducer2,
  foodReducer3,
});

export default rootReducer;
