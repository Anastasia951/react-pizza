import React, { useState } from 'react'
import AddToCart from './AddToCart'

function PizzaBlock({ pizza, onClickAddPizza, cartCount }) {
  const types = ['тонкое', 'традиционное']
  const dimension = [26, 30, 40]

  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)

  const selectItem = index => {
    setActiveType(index)
  }
  const selectSize = index => {
    setActiveSize(index)
  }
  const onAddPizza = ({ id, name, imageUrl, price }) => {
    const pizza = {
      id,
      name,
      imageUrl,
      price,
      size: dimension[activeSize],
      type: types[activeType],
    }

    onClickAddPizza(pizza)
  }
  return (
    <div className='pizza-block'>
      <div className='pizza-block__image'>
        <img src={pizza.imageUrl} alt={pizza.name} />
      </div>
      <div className='pizza-info'>
        <h4 className='pizza-block__title'>{pizza.name}</h4>
        <div className='pizza-block__selector'>
          <ul>
            {pizza.types.map((type, index) => (
              <li
                key={pizza.id + index}
                onClick={() => selectItem(type)}
                className={
                  pizza.types.includes(type)
                    ? activeType === index
                      ? 'active'
                      : ''
                    : 'disabled'
                }>
                {types[index]}
              </li>
            ))}
          </ul>
          <ul>
            {pizza.sizes.map((size, index) => (
              <li
                key={pizza.id + size}
                onClick={() => selectSize(index)}
                className={
                  pizza.sizes.includes(size)
                    ? index === activeSize
                      ? 'active'
                      : ''
                    : 'disabled'
                }>
                {dimension[index] + ` см`}
              </li>
            ))}
          </ul>
        </div>
        <div className='pizza-block__bottom'>
          <div className='pizza-block__price'>от {pizza.price} ₽</div>
          <AddToCart
            pizza={pizza}
            dispatch={onAddPizza}
            cartCount={cartCount}
          />
        </div>
      </div>
    </div>
  )
}

export default PizzaBlock
