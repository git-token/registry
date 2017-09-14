/**
 * [handleRegistration description]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return [type]       [description]
 */
export default function handleRegistration(req, res) {

  const {
    admin_username,
    github_token,
    organization
  } = req.body

  this.validateAdmin({
    username: admin_username,
    token: github_token,
    organization
  }).then((admin) => {
    if (!admin) {
      res.status(401).send('Invalid Authorization. Must be organization admin.')
    } else {
      return this.insertIntoRegistry(req.body)
    }
  }).then((result) => {
    res.status(200).send(result)
  }).catch((error) => {
    res.status(500).send(error.message)
  })
}
