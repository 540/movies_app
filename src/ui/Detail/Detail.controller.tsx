import { Detail } from './Detail'
import { useQueryService } from 'ui/_hooks/useService'
import { movieService } from 'core/Movie/services/movieService'
import { creditsService } from 'core/Credits/services/creditsService'
import { useState } from 'react'
import { useRouter } from 'next/router'

interface Props {
  movieId: number
}

export const DetailController = ({ movieId }: Props) => {
  const { back } = useRouter()
  const [isFavorite, setIsFavorite] = useState(movieService.isFavorite(movieId))
  const { data: movie } = useQueryService('movie-detail', [], () => movieService.detail(movieId))
  const { data: actors } = useQueryService('actors', [], () => creditsService.actors(movieId))

  const toggleFavorite = (id: number) => {
    isFavorite ? movieService.removeFavorite(id) : movieService.saveFavorite(id)
    setIsFavorite(!isFavorite)
  }

  return <Detail movie={movie} actors={actors} toggleFavorite={toggleFavorite} isFavorite={isFavorite} goBack={back} />
}
