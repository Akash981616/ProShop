import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  productDetailsReducers,
  productReducers, 
} from "../reducers/productReducers";
import { cartReducer } from "../reducers/cartReducer";
import { userLoginReducer} from "../reducers/userReducers.js";
const reducer = combineReducers({
  productList: productReducers,
  productDetails: productDetailsReducers,
  cart: cartReducer,
  userLogin:userLoginReducer,
  userRegister:userLoginReducer
});
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const initialState = { cart: { cartItems: cartItemsFromStorage },
userLogin:{userInfo:userInfoFromStorage} };
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
