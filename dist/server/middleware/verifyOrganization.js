'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifyOrganization;
function verifyOrganization(req, res, next, organization) {
  var body = req.body,
      data = req.data;

  this.validateAdmin(body).then(function (validated) {
    console.log('validated', validated);
    console.log('Call verifyOrganization contract data here.');
    next();
  }).catch(function (error) {
    res.status(500).send(error);
  });
}