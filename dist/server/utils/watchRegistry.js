'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = watchRegistry;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [watchRegistry description]
 * @return {[type]} [description]
 */
function watchRegistry(_ref) {
  var _this = this;

  var _ref$fromBlock = _ref.fromBlock,
      fromBlock = _ref$fromBlock === undefined ? 0 : _ref$fromBlock,
      _ref$toBlock = _ref.toBlock,
      toBlock = _ref$toBlock === undefined ? 'latest' : _ref$toBlock;


  return this.registry.allEvents({ fromBlock: 0, toBlock: 'latest' }, function (error, log) {
    if (error) {
      console.log('error', error);
    }
    _promise2.default.resolve(log).then(function (_ref2) {
      var event = _ref2.event,
          args = _ref2.args;

      switch (event) {
        case 'TokenRegistered':
          return _this.createRelayContract((0, _extends3.default)({}, args));
          break;
        default:
          console.log('Unhandled Contract Event');
      }
    }).then(function () {}).catch(function (error) {
      console.log(error);
    });
  });
}