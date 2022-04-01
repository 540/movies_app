import { Center, Grid, Layout } from 'ui/_components'
import { MovieResponse } from 'core/Movie/domain/MovieResponse'
import { PosterList } from 'ui/Home/_components/PosterList'

interface Props {
  popularMovies?: MovieResponse
}

export const Home = ({ popularMovies }: Props) => {
  if (!popularMovies) {
    return <Center>Loading...</Center>
  }

  return (
    <Layout>
      <Center>
        <Grid>
          {popularMovies.results.map(movie => (
            <PosterList movie={movie} key={movie.id} />
          ))}
        </Grid>
      </Center>
    </Layout>
  )
}
