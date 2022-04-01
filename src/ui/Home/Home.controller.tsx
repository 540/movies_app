import { Home } from './Home'
import { useQueryService } from 'ui/_hooks/useService'
import { movieService } from 'core/Movie/services/movieService'

export const HomeController = () => {
  const { data: popularMovies } = useQueryService('popular-movies', [], movieService.popular)

  return <Home popularMovies={popularMovies} />
}
