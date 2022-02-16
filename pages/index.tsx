import type { NextPage } from 'next'
import Head from 'next/head'
import { StyledHomePage, StyledHomePageContent } from '../styles/index.styles'
import HomeLink from '../components/HomeLink/HomeLink'
import Title from '../components/Title/Title'

const Home: NextPage = () => {
  return (
    <StyledHomePage>
      <Head>
        <title>Dmytro Pryshliak - Frontend Developer @ Luxoft</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StyledHomePageContent>
        <Title text="I'm Dmytro Pryshliak." />
        <HomeLink text='Frontend Developer @ Luxoft.' url='/dev' />
      </StyledHomePageContent>
    </StyledHomePage>
  )
}

export default Home
