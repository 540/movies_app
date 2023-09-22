import { container } from './index'
import { asClass, asValue } from 'awilix'
import { TheMovieDBApiClient } from '@/core/Shared/infrastructure/TheMovieDBApiClient'
import { envManager } from '@/core/Shared/infrastructure/envManager'

export const modules = {
  moviesApiClient: asClass(TheMovieDBApiClient),
  envManager: asValue(envManager),
}

export const registerModules = () => {
  container.register(modules)
}
