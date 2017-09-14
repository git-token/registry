'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAdmin = exports.validateContract = undefined;

var _validateContract = require('./validateContract');

var _validateContract2 = _interopRequireDefault(_validateContract);

var _validateAdmin = require('./validateAdmin');

var _validateAdmin2 = _interopRequireDefault(_validateAdmin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.validateContract = _validateContract2.default;
exports.validateAdmin = _validateAdmin2.default;