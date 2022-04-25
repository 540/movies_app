import { apiCreditsRepository } from 'core/Credits/infrastructure/apiCreditsRepository'
import { apiServer } from 'core/Shared/infrastructure/server/fetchServer'
import { aCredits } from 'core/Credits/domain/builders/CreditsBuilder'
import { apiConfig } from 'core/Shared/infrastructure/server/config'

describe('apiCreditsRepository', () => {
  it('fetches credits for a movie', async () => {
    const movieId = 1
    jest.spyOn(apiServer, 'get').mockResolvedValue({ data: aCredits() })

    const result = await apiCreditsRepository.credits(movieId)

    expect(apiServer.get).toHaveBeenCalledWith(`/movie/${movieId}/credits`, {
      params: {
        language: apiConfig.params.language.es
      }
    })
    expect(result).toEqual(aCredits())
  })
})
