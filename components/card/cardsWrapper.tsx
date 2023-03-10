import React from 'react'
import { TCardsWrapper } from '../../types'
import Card from './card'
import s from './cardsWrapper.module.css'
const CardsWrapper = ({ title, videos = [], size }: TCardsWrapper) => {
  return (
    <section className={s.container}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.cardWrapper}>
        {videos.map((v: any, i: any) => (
          <Card key={i} imgUrl={v.imgUrl} size={size} />
        ))}
      </div>
    </section>
  )
}

export default CardsWrapper
