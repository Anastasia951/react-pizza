const initialState = {
  sortBy: 'popular',
  category: 0
}
function filterReducer(state = initialState, action) {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: action.payload
    }
  } else if (action.type === 'SET_CATEGORY') {

  }

  return state
}

export default filterReducer