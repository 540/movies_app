import '@testing-library/jest-dom'
import { container } from '@/core/Shared/_di'
import { modules as movieModules } from '@/core/Movie/_di'
import { modules as sharedModules } from '@/core/Shared/_di/registerModules'
import { asValue } from 'awilix'

const modules = {
  ...movieModules,
  ...sharedModules,
}

beforeEach(() => {
  container.register({
    ...modules,
    envManager: asValue({
      getTmdbBaseUrl: () => 'https://tmbd-base-url.com',
      getTmbdApiKey: () => 'api-key',
      getTmdbImageUrl: () => 'https://tmbd-image-url.com',
    }),
  })
})
