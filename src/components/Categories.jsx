import React from 'react'

export default React.memo(function Categories({activeCategory, items, onClickItems}) {
  function changeActive(idx) {
    onClickItems(idx)
  }
  return (
    <div className="categories">
      <ul>
        {items && items.map((item, idx) => <li onClick={() => changeActive(idx)} key={`${item}_${idx}`} className={idx === activeCategory ? 'active' : ''}>{item}</li>)}
      </ul>
    </div>
  )
}
)