import { Detail } from './Detail'
import { useQueryService } from 'ui/_hooks/useService'
import { movieService } from 'core/Movie/services/movieService'

interface Props {
  movieId: number
}

export const DetailController = ({ movieId }: Props) => {
  const { data: movie } = useQueryService('movie-detail', [], () => movieService.detail(movieId))

  return <Detail movie={movie} />
}
