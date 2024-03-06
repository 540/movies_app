import { asClass, asValue } from 'awilix'
import { TheMovieDBApiClient } from '@/core/Shared/infrastructure/TheMovieDBApiClient'
import { envManager } from '@/core/Shared/infrastructure/envManager'

export const modules = {
  apiClient: asClass(TheMovieDBApiClient),
  envManager: asValue(envManager),
}
