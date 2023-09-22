import { MoviesRepository } from '@/core/Movie/domain/Movies.repository'
import { Movie } from '@/core/Movie/domain/Movie'

interface Depedenencies {
  moviesRepository: MoviesRepository
}

export class GetPopularMoviesAndItsHighlight {
  private moviesRepository: MoviesRepository

  constructor({ moviesRepository }: Depedenencies) {
    this.moviesRepository = moviesRepository
  }

  async execute(): Promise<{
    popularMovies: Movie[]
    highlightedMovie: Movie
  }> {
    const popularMovies = await this.moviesRepository.findPopular()
    const nextPopularMovies = popularMovies.filter(
      movie => movie.id !== popularMovies[0].id,
    )

    return {
      highlightedMovie: popularMovies[0],
      popularMovies: nextPopularMovies,
    }
  }
}
