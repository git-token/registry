import Promise from 'bluebird'

/**
 * [insertIntoRegistry description]
 * @param  {String} [admin_username=""] [description]
 * @param  {String} [admin_address=""]  [description]
 * @param  {String} [admin_email=""]    [description]
 * @param  {String} [organization=""]   [description]
 * @param  {String} [name=""]           [description]
 * @param  {String} [symbol=""]         [description]
 * @param  {Number} [decimals=0]        [description]
 * @param  {String} [token_address=""]  [description]
 * @param  {Number} [date_deployed=0}]  [description]
 * @return Promise
 */
export default function insertIntoRegistry({
  admin_username="",
  admin_address="",
  admin_email="",
  organization="",
  name="",
  symbol="",
  decimals=8,
  deployed=0,
  token_address="",
  date_registered=new Date().getTime(),
  date_deployed=0
}) {
  return new Promise((resolve, reject) => {
    this.mysql.query(`
      INSERT INTO registry (
        admin_username,
        admin_address,
        admin_email,
        organization,
        name,
        symbol,
        decimals,
        deployed,
        token_address,
        date_registered,
        date_deployed
      ) VALUES (
        "${admin_username}",
        "${admin_address}",
        "${admin_email}",
        "${organization}",
        "${name}",
        "${symbol}",
        ${decimals},
        "${deployed}",
        "${token_address}",
        ${date_registered},
        ${date_deployed}
      )
    `, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}
