import { screen } from '@testing-library/react'
import { Home } from 'ui/Home'
import { aMovieCollection } from 'core/Movie/domain/builders/MoviesBuilder'
import { movieService } from 'core/Movie/services/movieService'
import { renderScreen } from '../../../_testUtils/utils'

describe('Home', () => {
  it('shows a list of movies', async () => {
    jest.spyOn(movieService, 'popular').mockResolvedValue(aMovieCollection())

    renderHome()

    expect(await screen.findByText(aMovieCollection().results[0].title)).toBeDefined()
  })
})

const renderHome = () => renderScreen(<Home />)
