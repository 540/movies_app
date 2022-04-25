import { MovieResponse } from 'core/Movie/domain/MovieResponse'
import { MovieDetail } from 'core/Movie/domain/MovieDetail'

export interface MovieRepository {
  popular: () => Promise<MovieResponse>
  detail: (id: number) => Promise<MovieDetail>
  favorite: () => Promise<MovieDetail[]>
  saveFavorite: (id: number) => void
  removeFavorite: (id: number) => void
  favoriteIds: () => number[]
}
