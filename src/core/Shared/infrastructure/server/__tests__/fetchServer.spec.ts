import { apiServer } from '../fetchServer'
import axios from '__mocks__/axios'
import { apiConfig } from 'core/Shared/infrastructure/server/config'

describe('fetchServer', () => {
  it('create server with base url and api key', async () => {
    apiServer

    expect(axios.create).toHaveBeenCalledWith({
      baseURL: apiConfig.baseUrl,
      params: { api_key: apiConfig.apiKey }
    })
  })
})
