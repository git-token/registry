export default function handleRegistration(req, res) {
  console.log('req.body', req.body)
  const {
    address,
    decimals,
    name,
    organization,
    symbol,
    date,
  } = req.body

  this.mysql.query(`
    INSERT INTO registry (
      address,
      organization,
      name,
      symbol,
      decimals,
      date_deployed
    ) VALUES (
      "${address}",
      "${organization}",
      "${name}",
      "${symbol}",
      ${decimals},
      ${date}
    )
  `, (error, result) => {
    if (error) {
      res.status(500).send(error.message)
    } else {
      res.status(200).send(result)
    }
  })

}
