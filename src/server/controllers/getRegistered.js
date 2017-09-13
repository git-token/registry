export default function getRegistered(req, res) {
  this.mysql.query(`SELECT * FROM registry`, (error, result) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.status(200).send(result)
    }
  })
}
