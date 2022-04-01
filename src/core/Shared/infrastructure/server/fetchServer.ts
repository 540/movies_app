import axios from 'axios'
import { apiConfig } from 'core/Shared/infrastructure/server/config'
import applyCaseMiddleware from 'axios-case-converter'

export const apiServer = applyCaseMiddleware(
  axios.create({
    baseURL: apiConfig.baseUrl,
    params: {
      api_key: apiConfig.apiKey
    }
  })
)
