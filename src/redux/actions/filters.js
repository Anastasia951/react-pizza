const setSortBy = (payload) => {
  return {
    type: 'SET_SORT_BY',
    payload
  }
}

const setCategory = (payload) => {
  return {
    type: 'SET_CATEGORY',
    payload
  }
}


export { setSortBy, setCategory }