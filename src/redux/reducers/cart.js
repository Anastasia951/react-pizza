const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
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
    const newItems = {
      ...state.items,
      [action.payload.id]:
        !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload]
    }
    const arr = [].concat.apply([], Object.values(newItems))
    return {
      ...state,
      items: newItems,
      totalCount: arr.length,
      totalPrice: arr.reduce((sum, obj) => sum + obj.price, 0)
    }
  }

  return state
}

export default cartReducer