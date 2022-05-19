const initialState = {
  items: [],
  isLoaded: false
}
function pizzasReducer(state = initialState, action) {
  if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      items: action.payload,
      isLoaded: true
    }
  }

  return state
}

export default pizzasReducer