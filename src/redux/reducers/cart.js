const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}
const getTotalPrice = arr => {
  return arr.reduce((sum, obj) => sum + obj.price, 0)
}
function cartReducer(state = initialState, action) {
  if (action.type === 'SET_TOTAL_PRICE') {
    return {
      ...state,
      totalCount: action.payload
    }
  } else if (action.type === 'SET_TOTAL_COUNT') {
    return {
      ...state,
      totalCount: action.payload
    }
  } else if (action.type === 'ADD_PIZZA') {
    const currentPizzaItems = !state.items[action.payload.id]
      ? [action.payload]
      : [...state.items[action.payload.id].items, action.payload]
    const newItems = {
      ...state.items,
      [action.payload.id]: {
        items: currentPizzaItems,
        totalPrice: getTotalPrice(currentPizzaItems)
      }
    }
    const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
    const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)
    return {
      ...state,
      items: newItems,
      totalCount,
      totalPrice,
    }
  } else if (action.type === 'CLEAR_CART') {
    return {
      items: {},
      totalCount: 0,
      totalPrice: 0
    }
  } else if (action.type === 'REMOVE_CART_ITEM') {
    const newItems = { ...state.items }
    const newTotalPrice = state.totalPrice - newItems[action.payload].totalPrice
    const newTotalCount = state.totalCount - newItems[action.payload].items.length
    delete newItems[action.payload]
    return {
      ...state,
      items: newItems,
      totalCount: newTotalCount,
      totalPrice: newTotalPrice
    }
  }

  return state
}

export default cartReducer