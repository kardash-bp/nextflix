import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner/banner'
import Navbar from '../components/navbar/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextflix</title>
        <meta name='description' content='Netflix Cline by Next' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar username='d0nk1h0t' />
      <Banner
        title='Bullet Train'
        subTitle='The end of the line is just the beginning.'
        imgUrl='/static/bt-hero.jpg'
      />
      {/* <Card /> */}
    </>
  )
}
