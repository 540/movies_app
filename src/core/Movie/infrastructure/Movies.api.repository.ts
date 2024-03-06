import { MoviesRepository } from '@/core/Movie/domain/Movies.repository'
import { ApiClient } from '@/core/Shared/infrastructure/ApiClient'
import { Movie } from '@/core/Movie/domain/Movie'
import { PopularMoviesDTO } from '@/core/Movie/infrastructure/PopularMoviesDTO'
import type { EnvManager } from '@/core/Shared/infrastructure/envManager'

interface Dependencies {
  apiClient: ApiClient
  envManager: EnvManager
}

export class ApiMovieRepository implements MoviesRepository {
  private apiClient: ApiClient
  private envManager: EnvManager

  constructor({ apiClient, envManager }: Dependencies) {
    this.apiClient = apiClient
    this.envManager = envManager
  }

  async findPopular() {
    const moviesDTO = await this.apiClient.get<PopularMoviesDTO>(
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
