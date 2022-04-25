import { NextPage } from 'next'
import Head from 'next/Head'
import { Home as HomePage } from 'ui/Home'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Movies App</title>
    </Head>
    <HomePage />
  </div>
)

export default Home
