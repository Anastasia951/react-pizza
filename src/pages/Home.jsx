import React, {useCallback, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Categories, PizzaBlock, Sort, PizzaBlockLoader } from '../components'
import { addPizza } from '../redux/actions/cart'
import {setCategory, setSortBy} from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'
const categories = [
  'Все',
  'Мясные',
  'Вегетарианские',
  "Гриль",
  "Острые",
  "Закрытые"
]
const sortItems = [
  {name: 'популярности', type: 'popular'},
  {name: "цене", type: 'price'},
  {name: "алфавиту", type: 'alphabet'}
]
export default function Home() {
  const dispatch = useDispatch()
  const { pizzas, cartItems, isLoaded, category, sortBy } = useSelector(({ pizza, filter, cart }) => {
    return {
      pizzas: pizza.items,
      isLoaded: pizza.isLoaded,
      category: filter.category,
      sortBy: filter.sortBy,
      cartItems: cart.items
    }
  })
  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy])

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onClickSort = useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const onClickAddPizza = (obj) => {
    dispatch(addPizza(obj))
  }
  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} onClickItems={onSelectCategory} items={categories} />
        <Sort onClickSort={onClickSort} items={sortItems} activeSortType={sortBy}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? pizzas.map(pizza => <PizzaBlock cartCount={cartItems[pizza.id] ? cartItems[pizza.id].items.length : 0} onClickAddPizza={onClickAddPizza} key={pizza.id} pizza={pizza}/>): new Array(12).fill(0).map((_, idx) => <PizzaBlockLoader key={idx}/>)}
      </div>
    </div>
  )
}
