"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

exports.default = insertIntoRegistry;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [insertIntoRegistry description]
 * @param  {String} [admin_username=""] [description]
 * @param  {String} [admin_address=""]  [description]
 * @param  {String} [admin_email=""]    [description]
 * @param  {String} [organization=""]   [description]
 * @param  {String} [name=""]           [description]
 * @param  {String} [symbol=""]         [description]
 * @param  {Number} [decimals=0]        [description]
 * @param  {String} [token_address=""]  [description]
 * @param  {Number} [date_deployed=0}]  [description]
 * @return Promise
 */
function insertIntoRegistry(_ref) {
  var _this = this;

  var _ref$admin_username = _ref.admin_username,
      admin_username = _ref$admin_username === undefined ? "" : _ref$admin_username,
      _ref$admin_address = _ref.admin_address,
      admin_address = _ref$admin_address === undefined ? "" : _ref$admin_address,
      _ref$admin_email = _ref.admin_email,
      admin_email = _ref$admin_email === undefined ? "" : _ref$admin_email,
      _ref$organization = _ref.organization,
      organization = _ref$organization === undefined ? "" : _ref$organization,
      _ref$name = _ref.name,
      name = _ref$name === undefined ? "" : _ref$name,
      _ref$symbol = _ref.symbol,
      symbol = _ref$symbol === undefined ? "" : _ref$symbol,
      _ref$decimals = _ref.decimals,
      decimals = _ref$decimals === undefined ? 8 : _ref$decimals,
      _ref$deployed = _ref.deployed,
      deployed = _ref$deployed === undefined ? 0 : _ref$deployed,
      _ref$token_address = _ref.token_address,
      token_address = _ref$token_address === undefined ? "" : _ref$token_address,
      _ref$date_registered = _ref.date_registered,
      date_registered = _ref$date_registered === undefined ? new Date().getTime() : _ref$date_registered,
      _ref$date_deployed = _ref.date_deployed,
      date_deployed = _ref$date_deployed === undefined ? 0 : _ref$date_deployed;

  return new _promise2.default(function (resolve, reject) {
    _this.mysql.query("\n      INSERT INTO registry (\n        admin_username,\n        admin_address,\n        admin_email,\n        organization,\n        name,\n        symbol,\n        decimals,\n        deployed,\n        token_address,\n        date_registered,\n        date_deployed\n      ) VALUES (\n        \"" + admin_username + "\",\n        \"" + admin_address + "\",\n        \"" + admin_email + "\",\n        \"" + organization + "\",\n        \"" + name + "\",\n        \"" + symbol + "\",\n        " + decimals + ",\n        \"" + deployed + "\",\n        \"" + token_address + "\",\n        " + date_registered + ",\n        " + date_deployed + "\n      )\n    ", function (error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}