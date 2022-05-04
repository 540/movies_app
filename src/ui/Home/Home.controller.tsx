import { Home } from './Home'
import { movieService } from 'core/Movie/services/movieService'
import { useState } from 'react'
import { MovieResponse } from 'core/Movie/domain/MovieResponse'
import { useQueryService } from 'ui/_hooks/useService'
import { MovieDetail } from 'core/Movie/domain/MovieDetail'

interface Props {
  movies: MovieResponse
}

export const HomeController = ({ movies }: Props) => {
  const [activeTab, setActiveTab] = useState(Tab.Movies)
  const { data: favoriteMovies } = useQueryService<MovieDetail[]>('favorite-movies', [], movieService.favorite)

  return (
    <Home
      movies={activeTab === Tab.Movies ? movies : favoriteMovies}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  )
}

export enum Tab {
  Movies = 'Movies',
  Favorites = 'Favorites'
}
