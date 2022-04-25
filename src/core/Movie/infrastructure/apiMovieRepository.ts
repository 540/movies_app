import { MovieRepository } from 'core/Movie/domain/MovieRepository'
import { apiServer } from 'core/Shared/infrastructure/server/fetchServer'
import { apiConfig } from 'core/Shared/infrastructure/server/config'
import { MovieResponse } from 'core/Movie/domain/MovieResponse'
import { MovieDetail } from 'core/Movie/domain/MovieDetail'

export const apiMovieRepository: MovieRepository = {
  popular: async () => {
    const result = await apiServer.get<MovieResponse>('/movie/popular', {
      params: {
        language: apiConfig.params.language.es,
        page: apiConfig.params.page(1)
      }
    })

    return result.data
  },
  detail: async id => {
    const result = await apiServer.get<MovieDetail>(`/movie/${id}`, {
      params: {
        language: apiConfig.params.language.es
      }
    })

    return result.data
  },
  favorite: async () => {
    const favoriteMovies: MovieDetail[] = []
    const favoriteIds = apiMovieRepository.favoriteIds()

    for (const id of favoriteIds) {
      favoriteMovies.push(await apiMovieRepository.detail(id))
    }

    return favoriteMovies
  },
  saveFavorite: id => {
    const restIds = window.localStorage.getItem('favoriteMovies')

    !restIds?.includes(id.toString()) &&
      window.localStorage.setItem('favoriteMovies', `${restIds ? `${restIds},${id}` : `${id}`}`)
  },
  removeFavorite: id => {
    const favorites = apiMovieRepository.favoriteIds()
    window.localStorage.removeItem('favoriteMovies')

    favorites.forEach(favId => {
      favId !== id && apiMovieRepository.saveFavorite(favId)
    })
  },
  favoriteIds: () => {
    const restIds = window.localStorage.getItem('favoriteMovies')

    return restIds ? restIds.split(',').map(id => Number(id)) : []
  }
}
