import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import { Home } from 'ui/Home'
import { movieService } from 'core/Movie/services/movieService'
import { renderScreen } from '../../../_testUtils/utils'
import { aMovieCollection } from 'core/Movie/domain/builders/MoviesBuilder'

describe('Home', () => {
  beforeEach(() => {
    jest.spyOn(movieService, 'favorite').mockResolvedValue([])
  })

  it('shows a loading', async () => {
    jest.spyOn(movieService, 'popular').mockResolvedValue(aMovieCollection())

    renderHome()

    expect(await screen.findByText('Loading...')).toBeDefined()
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'))
  })
})

const renderHome = () => renderScreen(<Home />)
