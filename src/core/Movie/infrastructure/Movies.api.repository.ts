import { MoviesRepository } from '@/core/Movie/domain/Movies.repository'
import { ApiClient } from '@/core/Shared/infrastructure/ApiClient'
import { Movie } from '@/core/Movie/domain/Movie'
import { PopularMoviesDTO } from '@/core/Movie/infrastructure/PopularMoviesDTO'
import type { EnvManager } from '@/core/Shared/infrastructure/envManager'

interface Dependencies {
  moviesApiClient: ApiClient
  envManager: EnvManager
}

export class ApiMovieRepository implements MoviesRepository {
  private moviesApiClient: ApiClient
  private envManager: EnvManager

  constructor({ moviesApiClient, envManager }: Dependencies) {
    this.moviesApiClient = moviesApiClient
    this.envManager = envManager
  }

  async findPopular() {
    const moviesDTO = await this.moviesApiClient.get<PopularMoviesDTO>(
      `/movie/popular?api_key=${this.envManager.getTmbdApiKey()}&language=en-EN`,
    )

    return moviesDTO.data.results.map(
      movieDTO =>
        new Movie({
          id: movieDTO.id,
          title: movieDTO.title,
          backdropUrl: movieDTO.backdrop_path,
          posterUrl: movieDTO.poster_path,
          description: movieDTO.overview,
        }),
    )
  }
}
