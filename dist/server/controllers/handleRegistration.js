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
  var _this = this;

  var _req$body = req.body,
      admin_username = _req$body.admin_username,
      github_token = _req$body.github_token,
      organization = _req$body.organization;


  this.validateAdmin({
    username: admin_username,
    token: github_token,
    organization: organization
  }).then(function (admin) {
    if (!admin) {
      res.status(401).send('Invalid Authorization. Must be organization admin.');
    } else {
      return _this.insertIntoRegistry(req.body);
    }
  }).then(function (result) {
    res.status(200).send(result);
  }).catch(function (error) {
    res.status(500).send(error.message);
  });
}