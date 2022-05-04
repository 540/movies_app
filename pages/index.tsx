import { GetStaticProps, NextPage } from 'next'
import Head from 'next/Head'
import { Home as HomePage } from 'ui/Home'
import { MovieResponse } from 'core/Movie/domain/MovieResponse'
import { movieService } from 'core/Movie/services/movieService'

interface Props {
  movies: MovieResponse
}

const Home: NextPage<Props> = ({ movies }) => (
  <div>
    <Head>
      <title>Movies App</title>
    </Head>
    <HomePage movies={movies} />
  </div>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const movies = await movieService.popular()

  return {
    props: { movies }
  }
}

export default Home
