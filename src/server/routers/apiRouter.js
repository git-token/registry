import { Router } from 'express'

export default function apiRouter() {
  const router = Router()

  router.param('organization', this.verifyOrganization)

  router.post('/verify/:organization', (req, res) => {
    // console.log('req', req)
    res.status(200).send({ status: 'success'})
  })

  return router
}
