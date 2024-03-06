import '@testing-library/jest-dom'
import { asValue } from 'awilix'
import { container } from '@/_di/container'
import { modules } from '@/_di/modules'

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
