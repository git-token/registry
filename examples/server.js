const GitTokenRegistry = require('../dist/server/index').default

const config = require('../config.js')

const registry = new GitTokenRegistry(config)
