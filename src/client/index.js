import rp from 'request-promise'

export default class GitTokenRegistryClient {
  constructor({ registryUri }) {
    this.uri = registryUri
  }


  registerToken(details) {
    return new Promise((resolve, reject) => {
      rp({
        uri: this.uri,
        method: 'POST',
        body: { ...details },
        json: true
      }).then((result) => {
        resolve(result)
      }).catch((error) => {
        reject(error)
      })
    })
  }


}
