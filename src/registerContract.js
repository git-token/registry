import Promise from 'bluebird'
import rp from 'request-promise'

const defaultUri = `https://registry.gittoken.io`

export default function registerContract({ address, uri=defaultUri }) {
  return new Promise((resolve, reject) => {
    rp({
      method: 'POST',
      uri,
      body: {
        address
      },
      json:true
    }).then((result) => {
      resolve(result)
    }).catch((error) => {
      reject(error)
    })
  })
}
