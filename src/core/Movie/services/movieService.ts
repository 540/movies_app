import { apiMovieRepository } from 'core/Movie/infrastructure/apiMovieRepository'

export const movieService = {
  popular: apiMovieRepository.popular,
  detail: apiMovieRepository.detail
}
