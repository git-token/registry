'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateAdmin;

var _githubApi = require('github-api');

var _githubApi2 = _interopRequireDefault(_githubApi);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateAdmin(_ref) {
  var username = _ref.username,
      token = _ref.token,
      organization = _ref.organization;

  return new _bluebird2.default(function (resolve, reject) {
    var github = new _githubApi2.default({ username: username, token: token });
    var user = github.getUser();
    var org = github.getOrganization(organization);
    var profile = void 0;
    _bluebird2.default.resolve(user.getProfile()).then(function (_ref2) {
      var request = _ref2.request;

      profile = JSON.parse(request.responseText);
      return org.listMembers({ role: 'admin' });
    }).then(function (_ref3) {
      var request = _ref3.request;

      return JSON.parse(request.responseText);
    }).map(function (member) {
      if (member.login == profile.login) {
        resolve(true);
      } else {
        return null;
      }
    }).then(function () {
      resolve(false);
    }).catch(function (error) {
      reject(error);
    });
  });
}