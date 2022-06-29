import React from 'react'

export default function AddToCart({ pizza, dispatch, cartCount }) {
  return (
    <button
      onClick={() => dispatch(pizza)}
      className='button button--outline button--add'>
      <span>Добавить</span>
      <i>{cartCount}</i>
    </button>
  )
}
