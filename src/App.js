import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';

function App({ items, setPizzas }) {
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => setPizzas(data.pizzas))
  }, [])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/" exact element={<Home pizzas={items} />} />
        </Routes>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  items: state.pizza.items
})
const mapDispatchToProps = dispatch => ({
  setPizzas: (items) => dispatch(setPizzas(items))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
