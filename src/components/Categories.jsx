import React, { useState } from 'react'

export default function Categories({items}) {
  const [active, setActive] = useState(0)
  function changeActive(idx) {
    setActive(idx)
  }
  return (
    <div className="categories">
      <ul>
        {items && items.map((item, idx) => <li onClick={() => changeActive(idx)} key={`${item}_${idx}`} className={idx === active ? 'active' : ''}>{item}</li>)}
      </ul>
    </div>
  )
}