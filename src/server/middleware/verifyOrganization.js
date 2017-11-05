export default function verifyOrganization(req, res, next, organization) {
  const { body, data } = req
  this.validateAdmin(body).then((validated) => {
    console.log('validated', validated)
    console.log('Call verifyOrganization contract data here.')
    next()
  }).catch((error) => {
    res.status(500).send(error)
  })
}
