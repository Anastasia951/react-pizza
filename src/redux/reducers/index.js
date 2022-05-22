import { combineReducers } from "redux";

import cartReducer from "./cart";
import filterReducer from './filters'
import pizzasReducer from './pizzas'

const rootReducer = combineReducers({
  filter: filterReducer,
  pizza: pizzasReducer,
  cart: cartReducer,
})

export default rootReducer