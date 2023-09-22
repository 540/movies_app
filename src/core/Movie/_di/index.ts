import { asClass } from 'awilix'
import { ApiMovieRepository } from '@/core/Movie/infrastructure/Movies.api.repository'
import { GetPopularMoviesAndItsHighlight } from '@/core/Movie/usecase/GetPopularMoviesAndItsHighlight'

export const modules = {
  moviesRepository: asClass(ApiMovieRepository),
  getPopularMoviesAndItsHighlightUseCase: asClass(
    GetPopularMoviesAndItsHighlight,
  ),
}
