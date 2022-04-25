import { Center, Grid, Layout } from 'ui/_components'
import { instanceOfMovieResponse, MovieResponse } from 'core/Movie/domain/MovieResponse'
import { Poster } from 'ui/Home/_components/PosterList'
import { TabBar } from 'ui/Home/_components/TabBar'
import { Tab } from 'ui/Home/Home.controller'
import { MovieDetail } from 'core/Movie/domain/MovieDetail'

interface Props {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
  movies?: MovieResponse | MovieDetail[]
}

export const Home = ({ movies, activeTab, onTabChange }: Props) => {
  if (!movies) {
    return <Center>Loading...</Center>
  }

  return (
    <Layout crossAxis="center">
      <TabBar tabs={[Tab.Movies, Tab.Favorites]} activeTab={activeTab} onTabChange={onTabChange} />
      <Grid>
        {instanceOfMovieResponse(movies)
          ? movies.results.map(movie => <Poster movie={movie} key={movie.id} />)
          : movies.map(movie => <Poster movie={movie} key={movie.id} />)}
      </Grid>
    </Layout>
  )
}
