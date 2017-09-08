'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerContract;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultUri = 'https://registry.gittoken.io';

function registerContract(_ref) {
  var address = _ref.address,
      _ref$uri = _ref.uri,
      uri = _ref$uri === undefined ? defaultUri : _ref$uri;

  return new _bluebird2.default(function (resolve, reject) {
    (0, _requestPromise2.default)({
      method: 'POST',
      uri: uri,
      body: {
        address: address
      },
      json: true
    }).then(function (result) {
      resolve(result);
    }).catch(function (error) {
      reject(error);
    });
  });
}