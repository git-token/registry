'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleRegistration;


/**
 * [handleRegistration description]
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return [type]       [description]
 */
function handleRegistration(req, res) {
  console.log('req.body', req.body);
  var _req$body = req.body,
      admin_username = _req$body.admin_username,
      admin_address = _req$body.admin_address,
      admin_email = _req$body.admin_email,
      organization = _req$body.organization,
      name = _req$body.name,
      symbol = _req$body.symbol,
      decimals = _req$body.decimals,
      token_address = _req$body.token_address,
      date_deployed = _req$body.date_deployed;


  this.mysql.query('\n    INSERT INTO registry (\n      admin_username,\n      admin_address,\n      admin_email,\n      organization,\n      name,\n      symbol,\n      decimals,\n      token_address,\n      date_deployed\n    ) VALUES (\n      "' + admin_username + '",\n      "' + admin_address + '",\n      "' + admin_email + '",\n      "' + organization + '",\n      "' + name + '",\n      "' + symbol + '",\n      ' + decimals + ',\n      "' + token_address + '",\n      ' + date_deployed + '\n    )\n  ', function (error, result) {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(200).send(result);
    }
  });
}