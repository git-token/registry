import GitHubAPI from 'github-api'
import Promise from 'bluebird'


export default function validateAdmin({ username, token, organization }) {
  return new Promise((resolve, reject) => {
    const github = new GitHubAPI({ username, token })
    const user = github.getUser()
    const org = github.getOrganization(organization)
    let profile
    Promise.resolve(user.getProfile()).then(({ request }) => {
      profile = JSON.parse(request.responseText)
      return org.listMembers({ role: 'admin' })
    }).then(({ request }) => {
      return JSON.parse(request.responseText)
    }).map((member) => {
      if (member.login == profile.login) {
        resolve(true)
      } else {
        return null
      }
    }).then(() => {
      resolve(false)
    }).catch((error) => {
      reject(error)
    })
  })
}
