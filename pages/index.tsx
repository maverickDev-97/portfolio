import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeLink from '../components/HomeLink/HomeLink'
import Title from '../components/Title/Title'

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Dmytro Pryshliak</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container'>
        <Title text="I'm Dmytro Pryshliak." />
        <HomeLink text='React Developer @ Luxoft.' url='/dev'/>
        <HomeLink text='With passion for UX.' url='/des'/>
      </div>
    </div>
  )
}

export default Home
