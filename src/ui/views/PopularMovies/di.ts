import { container } from '@/core/Shared/_di'
import { asClass } from 'awilix'
import { ApiMovieRepository } from '@/core/Movie/infrastructure/Movies.api.repository'
import { GetPopularMoviesAndItsHighlight } from '@/core/Movie/usecase/GetPopularMoviesAndItsHighlight'

container.register({
  moviesRepository: asClass(ApiMovieRepository),
  getPopularMoviesAndItsHighlightUseCase: asClass(
    GetPopularMoviesAndItsHighlight,
  ),
})
