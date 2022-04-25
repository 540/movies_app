'use strict'

// eslint-disable-next-line @typescript-eslint/no-var-requires
var config = require('./jest.config.js')
config.testRegex = '\\.ispec\\.(ts|js|tsx)$'

// eslint-disable-next-line no-console
console.log('RUNNING INTEGRATION TESTS')

module.exports = config
