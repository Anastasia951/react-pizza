import axios from 'axios'

const setPizzas = (payload) => {
  return {
    type: 'SET_PIZZAS',
    payload
  }
}
const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false))
  let url = ''
  if (category === 0) {
    url = `http://localhost:3001/pizzas?_sort=${sortBy}&_order=desc`
  } else {
    url = `http://localhost:3001/pizzas?category=${category}&_sort=${sortBy}&_order=desc`
  }
  axios.get(url).then(({ data }) => dispatch(setPizzas(data)))
}
const setLoaded = payload => {
  return {
    type: 'SET_LOADED',
    payload
  }
}
export { setPizzas, fetchPizzas, setLoaded }