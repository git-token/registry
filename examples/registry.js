const GitTokenRegistry = require('../dist/index').default

const config = require('../config.js')

const registry = new GitTokenRegistry(config)
