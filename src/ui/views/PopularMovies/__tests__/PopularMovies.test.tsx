import { asValue } from 'awilix'
import { screen } from '@testing-library/react'
import { mock, MockProxy } from 'jest-mock-extended'
import { render } from '@/ui/__tests__/render'
import { GetPopularMoviesAndItsHighlight } from '@/core/Movie/usecase/GetPopularMoviesAndItsHighlight'
import { MovieBuilder } from '@/core/Movie/domain/__mocks__/MovieBuilder'
import { PopularMovies } from '@/ui/views/PopularMovies'
import { registerModule } from '@/_di/mocks/registerMockModule'

describe('Películas populares', () => {
  let mockGetPopularMoviesAndItsHighlightUseCase: MockProxy<GetPopularMoviesAndItsHighlight>

  beforeEach(() => {
    mockGetPopularMoviesAndItsHighlightUseCase =
      mock<GetPopularMoviesAndItsHighlight>()

    registerModule(
      'getPopularMoviesAndItsHighlightUseCase',
      asValue(mockGetPopularMoviesAndItsHighlightUseCase),
    )
  })

  it('muestra la destacada y no el resto cuando no hay otras', async () => {
    const highlightedMovie = new MovieBuilder().build()
    mockGetPopularMoviesAndItsHighlightUseCase.execute.mockResolvedValue({
      highlightedMovie,
      popularMovies: [],
    })

    render(<PopularMovies />)

    expect(await screen.findByText(highlightedMovie.title)).toBeInTheDocument()
  })

  it('muestra varias cuando existen', async () => {
    const highlightedMovie = new MovieBuilder()
      .withTitle('Highlighted Movie')
      .build()
    const popularMovies = [
      new MovieBuilder().withId(1).withTitle('Popular Movie 1').build(),
      new MovieBuilder().withId(2).withTitle('Popular Movie 2').build(),
    ]
    mockGetPopularMoviesAndItsHighlightUseCase.execute.mockResolvedValue({
      highlightedMovie,
      popularMovies,
    })

    render(<PopularMovies />)

    expect(await screen.findByText(highlightedMovie.title)).toBeInTheDocument()
    for (const movie of popularMovies) {
      expect(await screen.findByText(movie.title)).toBeInTheDocument()
    }
  })
})
