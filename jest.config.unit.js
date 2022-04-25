'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
var config = require('./jest.config.js')
config.testRegex = '\\.spec\\.(ts|js)$'
config.setupFilesAfterEnv = ['./setupJestUnit.ts']

// eslint-disable-next-line no-console
console.log('RUNNING UNIT TESTS')

module.exports = config
