import Head from 'next/head'
import Banner from '../components/banner/banner'
import Nav from '../components/navbar/nav'
import styles from '../styles/Home.module.css'
import CardsWrapper from '../components/card/cardsWrapper'
import { getPopularVideos, getVideos } from '../lib/videos'

export async function getServerSideProps() {
  const popular = await getPopularVideos()
  const trailers = await getVideos('trailers')
  const aquascape = await getVideos('aquascape')
  return {
    props: {
      popular,
      trailers,
      aquascape,
    },
  }
}
export default function Home({ popular, trailers, aquascape }: any) {
  return (
    <>
      <Head>
        <title>NextTube</title>
        <meta name='description' content='NextTube by Next' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/movie.png' />
      </Head>

      <div className={styles.main}>
        <Nav username='donKihot' />
        <Banner
          title='Bullet Train'
          subTitle='The end of the line is just the beginning.'
          imgUrl='/static/bt-hero.jpg'
        />
        <div className={styles.sectionWrapper}>
          {' '}
          <CardsWrapper title='Trailers' videos={trailers} size='large' />
          <CardsWrapper title='Popular' videos={popular} size='medium' />
          <CardsWrapper title='Aquascape' videos={aquascape} size='small' />
        </div>
      </div>
    </>
  )
}
