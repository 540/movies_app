import { Home } from './Home'
import { useQueryService } from 'ui/_hooks/useService'
import { movieService } from 'core/Movie/services/movieService'
import { useState } from 'react'
import { MovieResponse } from 'core/Movie/domain/MovieResponse'
import { MovieDetail } from 'core/Movie/domain/MovieDetail'

export const HomeController = () => {
  const [activeTab, setActiveTab] = useState(Tab.Movies)
  const { data: movies, refetch } = useQueryService<MovieResponse | MovieDetail[]>('movies', [], getMovies[activeTab])

  const onTabChange = async (tab: Tab) => {
    await setActiveTab(tab)
    await refetch()
  }

  return <Home movies={movies} activeTab={activeTab} onTabChange={onTabChange} />
}

export enum Tab {
  Movies = 'Movies',
  Favorites = 'Favorites'
}

const getMovies = {
  [Tab.Movies]: () => movieService.popular(),
  [Tab.Favorites]: () => movieService.favorite()
}
