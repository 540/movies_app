import { mock, MockProxy } from 'jest-mock-extended'
import { ApiMovieRepository } from '@/core/Movie/infrastructure/Movies.api.repository'
import { ApiClient } from '@/core/Shared/infrastructure/ApiClient'
import { PopularMoviesDTOBuilder } from '@/core/Movie/infrastructure/__mocks__/PopularMoviesDTOBuilder'
import { MovieBuilder } from '@/core/Movie/domain/__mocks__/MovieBuilder'
import type { EnvManager } from '@/core/Shared/infrastructure/envManager'

describe('repositorio de películas', () => {
  let mockApiClient: MockProxy<ApiClient>
  let mockEnvManager: MockProxy<EnvManager>

  beforeEach(() => {
    mockApiClient = mock<ApiClient>()
    mockEnvManager = mock<EnvManager>()
  })

  it('encuentra las películas populares', async () => {
    mockApiClient.get.mockResolvedValue(
      new PopularMoviesDTOBuilder()
        .withId(13)
        .withTitle('Any title')
        .withBackdropPath('Any backdrop path')
        .withPosterPath('Any poster path')
        .withOverview('Any overview')
        .build(),
    )
    const repository = new ApiMovieRepository({
      apiClient: mockApiClient,
      envManager: mockEnvManager,
    })

    const popularMovies = await repository.findPopular()

    expect(popularMovies).toEqual(
      new MovieBuilder()
        .withId(13)
        .withTitle('Any title')
        .withBackdropUrl('Any backdrop path')
        .withPosterUrl('Any poster path')
        .withDescription('Any overview')
        .buildSingleList(),
    )
  })
})
