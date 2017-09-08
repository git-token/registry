"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRegistered;
function getRegistered() {
  this.mysql.query("SELECT * FROM registry", function (error, result) {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  });
}