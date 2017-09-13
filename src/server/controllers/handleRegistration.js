/**
 * [handleRegistration description]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return [type]       [description]
 */
export default function handleRegistration(req, res) {
  this.insertIntoRegistry(req.body).then((result) => {
    res.status(200).send(result)
  }).catch((error) => {
    res.status(500).send(error.message)
  })
}
