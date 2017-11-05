'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = apiRouter;

var _express = require('express');

function apiRouter() {
  var router = (0, _express.Router)();

  router.param('organization', this.verifyOrganization);

  router.post('/verify/:organization', function (req, res) {
    // console.log('req', req)
    res.status(200).send({ status: 'success' });
  });

  return router;
}