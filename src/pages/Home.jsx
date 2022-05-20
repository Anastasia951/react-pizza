import React, {useCallback} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Categories, PizzaBlock, Sort } from '../components'
import {setCategory} from '../redux/actions/filters'
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
  const { pizzas } = useSelector(({ pizza }) => {
    return {
      pizzas: pizza.items,
    }
  })
  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])
  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItems={onSelectCategory} items={categories} />
        <Sort items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza}/>)}
      </div>
    </div>
  )
}
