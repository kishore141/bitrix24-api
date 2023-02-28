"use strict";

var DaysToSeconds = function DaysToSeconds() {
  var days = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
  var seconds = 60 * 60 * 24 * days;
  return seconds;
};
module.exports = {
  DaysToSeconds: DaysToSeconds
};