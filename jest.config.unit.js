'use strict'

var config = require('./jest.config')
config.testRegex = '\\.spec\\.(ts|js)$'
config.setupFilesAfterEnv = ['./setupJestUnit.ts']

// eslint-disable-next-line no-console
console.log('RUNNING UNIT TESTS')

module.exports = config
