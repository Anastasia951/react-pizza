import React, { useEffect } from "react"
import { useDispatch } from 'react-redux'

import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Home, Cart } from './pages';


import { fetchPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPizzas())
  }, [])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App