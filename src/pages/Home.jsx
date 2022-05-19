import React from 'react'
import { Categories, PizzaBlock, Sort } from '../components'

export default function Home({pizzas}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={[
          'Все',
          'Мясные',
          'Вегетарианские',
          "Гриль",
          "Острые",
          "Закрытые"
        ]} />
        <Sort items={[
          {name: 'популярности', type: 'popular'},
          {name: "цене", type: 'price'},
          {name: "алфавиту", type: 'alphabet'}
        ]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza}/>)}
      </div>
    </div>
  )
}
