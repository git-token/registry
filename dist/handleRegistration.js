'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleRegistration;
function handleRegistration(req, res) {
  var _this = this;

  console.log(req.body);
  this.validateContract({ address: req.body }).then(function (contract) {
    var address = contract.address,
        decimals = contract.decimals,
        name = contract.name,
        organization = contract.organization,
        symbol = contract.symbol,
        date = contract.date;

    _this.mysql.query('\n      INSERT INTO registry (\n        address,\n        organization,\n        name,\n        symbol,\n        decimals,\n        date_deployed\n      ) VALUES (\n        "' + address + '",\n        "' + organization + '",\n        "' + name + '",\n        "' + symbol + '",\n        ' + decimals + ',\n        ' + date + '\n      )\n    ', function (error, result) {
      if (error) {
        console.log('error', error);
        res.status(500).send(error);
      } else {
        res.status(200).send(result);
      }
    });
  }).catch(function (error) {
    console.log('error', error);
    res.status(500).send(error);
  });
}