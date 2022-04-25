// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@(.*)/(.*)$': '<rootDir>/node_modules/@$1/$2',
    '^__mocks__/(.*)$': '<rootDir>/src/__mocks__/$1',
    '^core/(.*)$': '<rootDir>/src/core/$1',
    '^ui/(.*)$': '<rootDir>/src/ui/$1'
  },
  resetMocks: true
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
