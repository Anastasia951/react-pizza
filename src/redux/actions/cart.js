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
const clearCart = () => {
  return {
    type: 'CLEAR_CART'
  }
}

const removeCartItem = (id) => {
  return {
    type: 'REMOVE_CART_ITEM',
    payload: id,
  }
}

const incrementPizza = (id) => {
  return {
    type: 'INCREMENT_PIZZA',
    payload: id,
  }
}

const decrementPizza = (id) => {
  return {
    type: 'DECREMENT_PIZZA',
    payload: id,
  }
}

export { setTotalCount, setTotalPrice, addPizza, clearCart, removeCartItem, incrementPizza, decrementPizza }