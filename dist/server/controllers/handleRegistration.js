"use strict";

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
  this.insertIntoRegistry(req.body).then(function (result) {
    res.status(200).send(result);
  }).catch(function (error) {
    res.status(500).send(error.message);
  });
}