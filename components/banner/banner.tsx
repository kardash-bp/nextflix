import Image from 'next/image'
import React from 'react'
import styles from './banner.module.css'

type TBanner = { title: string; subTitle: string; imgUrl: string }
const Banner = ({ title, subTitle, imgUrl }: TBanner) => {
  const handleClickPlay = () => {
    console.log('Play Clicked')
  }
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <h3 className={styles.title}> {title}</h3>
          <h5 className={styles.subTitle}>{subTitle}</h5>
          <div className={styles.playBtnWrapper}>
            {' '}
            <button className={styles.btnWithIcon} onClick={handleClickPlay}>
              <span className={styles.playText}>
                <Image
                  src='/static/play.svg'
                  width={32}
                  height={32}
                  alt='play button icon'
                />{' '}
                Play
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
        }}
      ></div>
    </div>
  )
}

export default Banner
