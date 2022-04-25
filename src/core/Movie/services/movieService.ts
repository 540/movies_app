import { apiMovieRepository } from 'core/Movie/infrastructure/apiMovieRepository'

export const movieService = {
  popular: apiMovieRepository.popular,
  detail: apiMovieRepository.detail,
  favorite: apiMovieRepository.favorite,
  saveFavorite: apiMovieRepository.saveFavorite,
  removeFavorite: apiMovieRepository.removeFavorite,
  favoriteIds: apiMovieRepository.favoriteIds,
  isFavorite: (id: number) => movieService.favoriteIds().includes(id)
}
