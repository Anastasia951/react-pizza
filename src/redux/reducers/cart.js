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
  } else if (action.type === 'INCREMENT_PIZZA') {
    const newItems = [
      ...state.items[action.payload].items,
      state.items[action.payload].items[0]
    ]
    return {
      ...state,
      items: {
        ...state.items,
        [action.payload]: {
          items: newItems,
          totalPrice: getTotalPrice(newItems)
        }
      },
      totalCount: state.totalCount + 1,
      totalPrice: state.totalPrice + newItems[0].price
    }
  } else if (action.type === 'DECREMENT_PIZZA') {
    const prevItems = state.items[action.payload].items
    const newItems = prevItems.length > 1 ? prevItems.slice(1) : prevItems

    return {
      ...state,
      items: {
        ...state.items,
        [action.payload]: {
          items: newItems,
          totalPrice: newItems.length > 1 ? getTotalPrice(newItems) : state.items[action.payload].items[0].price
        }
      },
      totalCount: prevItems.length > 1 ? state.totalCount - 1 : state.totalCount,
      totalPrice: prevItems.length > 1 ? state.totalPrice - newItems[0].price : state.totalPrice
    }
  }

  return state
}

export default cartReducer