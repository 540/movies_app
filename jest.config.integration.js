'use strict'

var config = require('./jest.config')
config.testRegex = '\\.ispec\\.(ts|js|tsx)$'

// eslint-disable-next-line no-console
console.log('RUNNING INTEGRATION TESTS')

module.exports = config
