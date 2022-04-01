import { MovieRepository } from 'core/Movie/domain/MovieRepository'
import { apiServer } from 'core/Shared/infrastructure/server/fetchServer'
import { apiConfig } from 'core/Shared/infrastructure/server/config'
import { MovieResponse } from 'core/Movie/domain/MovieResponse'
import { MovieDetail } from 'core/Movie/domain/MovieDetail'

export const apiMovieRepository: MovieRepository = {
  popular: async () => {
    const result = await apiServer.get<MovieResponse>('/movie/popular', {
      params: {
        language: apiConfig.params.language('es-ES'),
        page: apiConfig.params.page(1)
      }
    })

    return result.data
  },
  detail: async id => {
    const result = await apiServer.get<MovieDetail>(`/movie/${id}`, {
      params: {
        language: apiConfig.params.language('es-ES')
      }
    })

    return result.data
  }
}
