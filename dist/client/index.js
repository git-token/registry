'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GitTokenRegistryClient = function () {
  function GitTokenRegistryClient(_ref) {
    var registryUri = _ref.registryUri;
    (0, _classCallCheck3.default)(this, GitTokenRegistryClient);

    this.uri = registryUri;
  }

  (0, _createClass3.default)(GitTokenRegistryClient, [{
    key: 'registerToken',
    value: function registerToken(details) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        (0, _requestPromise2.default)({
          uri: _this.uri,
          method: 'POST',
          body: (0, _extends3.default)({}, details),
          json: true
        }).then(function (result) {
          resolve(result);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }]);
  return GitTokenRegistryClient;
}();

exports.default = GitTokenRegistryClient;