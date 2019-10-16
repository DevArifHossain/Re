import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  products: productReducer,
  users: userReducer
});

export default rootReducer;
