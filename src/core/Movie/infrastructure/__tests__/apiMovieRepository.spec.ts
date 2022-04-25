import { apiMovieRepository } from '../apiMovieRepository'
import { aMovieCollection, aMovieDetail } from 'core/Movie/domain/builders/MoviesBuilder'
import { apiServer } from 'core/Shared/infrastructure/server/fetchServer'
import { apiConfig } from 'core/Shared/infrastructure/server/config'

describe('apiMovieRepository', () => {
  it('fetches popular movies', async () => {
    jest.spyOn(apiServer, 'get').mockResolvedValue({ data: aMovieCollection() })

    const response = await apiMovieRepository.popular()

    expect(apiServer.get).toHaveBeenCalledWith('/movie/popular', {
      params: {
        language: apiConfig.params.language.es,
        page: apiConfig.params.page(1)
      }
    })
    expect(response).toEqual(aMovieCollection())
  })

  it('fetches movie detail', async () => {
    jest.spyOn(apiServer, 'get').mockResolvedValue({ data: aMovieDetail() })

    const response = await apiMovieRepository.detail(1)

    expect(apiServer.get).toHaveBeenCalledWith('/movie/1', {
      params: {
        language: apiConfig.params.language.es
      }
    })
    expect(response).toEqual(aMovieDetail())
  })

  it('fetches favorite movies', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('1,2')
    jest.spyOn(apiServer, 'get').mockResolvedValue({ data: aMovieDetail() })

    await apiMovieRepository.favorite()

    expect(apiServer.get).toHaveBeenCalledWith('/movie/1', {
      params: {
        language: apiConfig.params.language.es
      }
    })
    expect(apiServer.get).toHaveBeenCalledTimes(2)
  })

  it('saves first favorite movie id', () => {
    jest.spyOn(Storage.prototype, 'setItem')
    jest.spyOn(Storage.prototype, 'getItem')

    apiMovieRepository.saveFavorite(1)

    expect(localStorage.getItem).toHaveBeenCalledWith('favoriteMovies')
    expect(localStorage.setItem).toHaveBeenCalledWith('favoriteMovies', '1')
  })

  it('saves second favorite movie id', () => {
    jest.spyOn(Storage.prototype, 'setItem')
    jest.spyOn(Storage.prototype, 'getItem')

    apiMovieRepository.saveFavorite(1)
    apiMovieRepository.saveFavorite(2)

    expect(localStorage.setItem).toHaveBeenCalledWith('favoriteMovies', '1')
    expect(localStorage.setItem).toHaveBeenCalledWith('favoriteMovies', '2')
  })

  it('gets favorite movies id', () => {
    jest.spyOn(Storage.prototype, 'getItem')

    apiMovieRepository.favoriteIds()

    expect(localStorage.getItem).toHaveBeenCalledWith('favoriteMovies')
  })

  it('removes favorite movies id', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('1,2')
    jest.spyOn(Storage.prototype, 'removeItem')
    jest.spyOn(apiMovieRepository, 'saveFavorite')

    apiMovieRepository.removeFavorite(1)

    expect(localStorage.removeItem).toHaveBeenCalledWith('favoriteMovies')
    expect(apiMovieRepository.saveFavorite).toHaveBeenCalledWith(2)
  })
})
