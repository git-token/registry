export default function handleRegistration(req, res) {
  this.validateContract({ address: req.body }).then((contract) => {
    const {
      address,
      decimals,
      name,
      organization,
      symbol,
      date,
    } = contract
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
        res.status(500).send(error)
      } else {
        res.status(200).send(result)
      }
    })
  }).catch((error) => {
    res.status(500).send(error)
  })
}
