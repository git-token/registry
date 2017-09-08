"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleRegistration;
function handleRegistration(req, res) {
  var _req$body = req.body,
      address = _req$body.address,
      decimals = _req$body.decimals,
      name = _req$body.name,
      organization = _req$body.organization,
      symbol = _req$body.symbol,
      date = _req$body.date;


  this.mysql.query("\n    INSERT INTO registry (\n      address,\n      organization,\n      name,\n      symbol,\n      decimals,\n      date_deployed\n    ) VALUES (\n      \"" + address + "\",\n      \"" + organization + "\",\n      \"" + name + "\",\n      \"" + symbol + "\",\n      " + decimals + ",\n      " + date + "\n    )\n  ", function (error, result) {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(200).send(result);
    }
  });
}