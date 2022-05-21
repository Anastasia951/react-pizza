import React, {useCallback, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Categories, PizzaBlock, Sort, PizzaBlockLoader } from '../components'
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
  const { pizzas, isLoaded, category, sortBy } = useSelector(({ pizza, filter }) => {
    return {
      pizzas: pizza.items,
      isLoaded: pizza.isLoaded,
      category: filter.category,
      sortBy: filter.sortBy,
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
  })

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} onClickItems={onSelectCategory} items={categories} />
        <Sort onClickSort={onClickSort} items={sortItems} activeSortType={sortBy}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza}/>): new Array(12).fill(0).map((_, idx) => <PizzaBlockLoader key={idx}/>)}
      </div>
    </div>
  )
}
