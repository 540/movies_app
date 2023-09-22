import axios from 'axios'
import { ApiClient } from '@/core/Shared/infrastructure/ApiClient'
import { envManager } from '@/core/Shared/infrastructure/envManager'

export const theMovieDBAxiosInstance = axios.create({
  baseURL: envManager.getTmdbBaseUrl(),
})

export class TheMovieDBApiClient extends ApiClient {
  constructor() {
    super(theMovieDBAxiosInstance)
  }
}
