import { CreditsRepository } from 'core/Credits/domain/CreditsRepository'
import { apiServer } from 'core/Shared/infrastructure/server/fetchServer'
import { apiConfig } from 'core/Shared/infrastructure/server/config'

export const apiCreditsRepository: CreditsRepository = {
  credits: async movieId => {
    const result = await apiServer.get(`/movie/${movieId}/credits`, {
      params: {
        language: apiConfig.params.language.es
      }
    })

    return result.data
  }
}
