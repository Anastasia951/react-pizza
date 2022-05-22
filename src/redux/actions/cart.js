const setTotalCount = (payload) => {
  return {
    type: 'SET_TOTAL_COUNT',
    payload
  }
}

const setTotalPrice = (payload) => {
  return {
    type: 'SET_TOTAL_PRICE',
    payload
  }
}
const addPizza = (payload) => {
  return {
    type: 'ADD_PIZZA',
    payload
  }
}

export { setTotalCount, setTotalPrice, addPizza }