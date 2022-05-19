import { combineReducers } from "redux";

import filterReducer from './filters'
import pizzasReducer from './pizzas'

const rootReducer = combineReducers({
  filter: filterReducer,
  pizza: pizzasReducer
})

export default rootReducer