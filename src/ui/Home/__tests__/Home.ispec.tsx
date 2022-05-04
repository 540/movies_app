import { screen, waitFor } from '@testing-library/react'
import { Home } from 'ui/Home'
import { renderScreen } from '../../../_testUtils/utils'
import { aMovieCollection } from 'core/Movie/domain/builders/MoviesBuilder'
import { movieService } from 'core/Movie/services/movieService'

describe('Home', () => {
  beforeEach(() => {
    jest.spyOn(movieService, 'favorite').mockResolvedValue([])
  })

  it('shows a loading', async () => {
    renderHome()

    await waitFor(async () => {
      expect(await screen.findAllByText(aMovieCollection().results[0].title)).toBeDefined()
      expect(movieService.favorite).toHaveBeenCalled()
    })
  })
})

const renderHome = () => renderScreen(<Home movies={aMovieCollection()} />)
