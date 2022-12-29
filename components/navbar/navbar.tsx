import React from 'react'
import { Bebas_Neue } from '@next/font/google'
import Image from 'next/image'
import styles from './navbar.module.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})
type TProps = {
  username: string
}
const Navbar = ({ username }: TProps) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logoWrapper}>
          <Image
            src='/static/logo.png'
            alt='logo'
            width={44}
            height={44}
            color={'red'}
          />
          <span className={bebas.className}> NEXTtube</span>
        </div>
        <ul>
          <li>Home</li>
          <li>My List</li>
        </ul>
      </div>
      <div className={styles.right}>
        <button>{username}</button>
        <div>
          <a href='#'>Sign Out</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
