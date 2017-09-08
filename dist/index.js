'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _net = require('net');

var _net2 = _interopRequireDefault(_net);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _signerClient = require('gittoken-signer/dist/signerClient');

var _signerClient2 = _interopRequireDefault(_signerClient);

var _validateContract = require('./validateContract');

var _validateContract2 = _interopRequireDefault(_validateContract);

var _handleRegistration = require('./handleRegistration');

var _handleRegistration2 = _interopRequireDefault(_handleRegistration);

var _getRegistered = require('./getRegistered');

var _getRegistered2 = _interopRequireDefault(_getRegistered);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GitTokenRegistry = function (_GitTokenSignerClient) {
  (0, _inherits3.default)(GitTokenRegistry, _GitTokenSignerClient);

  function GitTokenRegistry(_ref) {
    var port = _ref.port,
        recoveryShare = _ref.recoveryShare,
        signerIpcPath = _ref.signerIpcPath,
        web3Provider = _ref.web3Provider,
        mysqlHost = _ref.mysqlHost,
        mysqlUser = _ref.mysqlUser,
        mysqlRootPassword = _ref.mysqlRootPassword,
        mysqlDatabase = _ref.mysqlDatabase;
    (0, _classCallCheck3.default)(this, GitTokenRegistry);

    var _this

    // Express Application
    = (0, _possibleConstructorReturn3.default)(this, (GitTokenRegistry.__proto__ || (0, _getPrototypeOf2.default)(GitTokenRegistry)).call(this, { signerIpcPath: signerIpcPath }));

    _this.web3Provider = web3Provider;
    _this.web3 = new _web2.default(new _web2.default.providers.HttpProvider(_this.web3Provider));
    _this.eth = (0, _bluebird.promisifyAll)(_this.web3.eth);

    _this.mysql = _mysql2.default.createConnection({
      host: mysqlHost,
      user: mysqlUser,
      password: mysqlRootPassword,
      database: mysqlDatabase
    });

    _this.validateContract = _validateContract2.default.bind(_this);
    _this.handleRegistration = _handleRegistration2.default.bind(_this);
    _this.getRegistered = _getRegistered2.default.bind(_this);_this.app = (0, _express2.default)();

    _this.app.use((0, _cors2.default)());
    _this.app.use(_bodyParser2.default.json() // handle json data
    );_this.app.use(_bodyParser2.default.urlencoded({ extended: true }) // handle URL-encoded data
    );_this.app.post('/', _this.handleRegistration);
    _this.app.get('/', _this.getRegistered);

    _this.app.listen(port, function () {
      console.log(_chalk2.default.hex('#210b49').bgHex('#cc5333')('GitToken Registry Listening for Events on Port ' + port));
    });
    return _this;
  }

  return GitTokenRegistry;
}(_signerClient2.default);

exports.default = GitTokenRegistry;