import axios from 'axios'
// import { } from 'redux-thunk'
const setPizzas = (payload) => {
  return {
    type: 'SET_PIZZAS',
    payload
  }
}
const fetchPizzas = () => (dispatch) => {
  axios.get('http://localhost:3001/pizzas').then(({ data }) => dispatch(setPizzas(data)))
  console.log('fetcj')
}

export { setPizzas, fetchPizzas }