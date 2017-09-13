const GitTokenRegistryClient = require('../dist/client/index').default

const registry = new GitTokenRegistryClient({
  registryUri: 'http://localhost:3001'
})


registry.registerToken({
  github_token: '0x0', // For server-side validation of admin
  admin_username: 'Ryanmtate',
  admin_address: '0x0',
  admin_email: 'ryan.tate@gittoken.io',
  organization: 'git-token',
  name: 'GitToken',
  symbol: 'GTK',
  decimals: 8
}).then((result) => {
  console.log('result', result)
}).catch((error) => {
  console.log('error', error)
})
