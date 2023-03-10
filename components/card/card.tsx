import Image from 'next/image'
import { useState } from 'react'
import { TCard } from '../../types'
import s from './card.module.css'
import { motion } from 'framer-motion'
import cls from 'classnames'
const Card = ({
  imgUrl = 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  size = 'medium',
}: TCard) => {
  const [imgSrc, setImgSrc] = useState(imgUrl)

  const classMap = {
    large: s.lgItem,
    medium: s.mdItem,
    small: s.smItem,
  } as any
  const handleError = () => {
    setImgSrc(
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    )
  }
  return (
    <div className={s.container}>
      <motion.div
        className={cls(s.imgMotion, classMap[size])}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src={imgSrc!}
          alt='movie cover'
          className={s.cardImg}
          fill
          sizes='(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw'
          onError={handleError}
        />
      </motion.div>
    </div>
  )
}

export default Card
