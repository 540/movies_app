import { mock } from 'jest-mock-extended'
import { GetPopularMoviesAndItsHighlight } from '@/core/Movie/usecase/GetPopularMoviesAndItsHighlight'
import { MoviesRepository } from '@/core/Movie/domain/Movies.repository'
import { MovieBuilder } from '@/core/Movie/domain/__mocks__/MovieBuilder'

describe('Caso de uso de recoger películas populares y su destacada', () => {
  it('las obtiene y calcula la destacada', async () => {
    const firstMovie = new MovieBuilder()
    const secondMovie = new MovieBuilder().withId(2)
    const moviesRepositoryMock = mock<MoviesRepository>()
    moviesRepositoryMock.findPopular.mockResolvedValue([
      firstMovie.build(),
      secondMovie.build(),
    ])

    const popularMovies = await new GetPopularMoviesAndItsHighlight({
      moviesRepository: moviesRepositoryMock,
    }).execute()

    expect(popularMovies).toEqual({
      highlightedMovie: firstMovie.build(),
      popularMovies: [secondMovie.build()],
    })
  })
})
