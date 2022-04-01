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
        language: apiConfig.params.language('es-ES'),
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
        language: apiConfig.params.language('es-ES')
      }
    })
    expect(response).toEqual(aMovieDetail())
  })
})
