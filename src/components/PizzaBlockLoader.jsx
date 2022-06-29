import React from 'react'
import ContentLoader from 'react-content-loader'
export default function PizzaBlockLoader() {
  return (
    <ContentLoader
      speed={2}
      width={'100%'}
      height={460}
      viewBox='0 0 280 460'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <circle cx='140' cy='140' r='125' />
      <rect x='0' y='280' rx='6' ry='6' width='100%' height='30' />
      <rect x='0' y='320' rx='6' ry='6' width='100%' height='84' />
      <rect x='0' y='420' rx='6' ry='6' width='10%' height='40' />
    </ContentLoader>
  )
}
