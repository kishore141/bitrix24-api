"use strict";

var behindNow = function behindNow(dateTimeString) {
  var currentDateTimeInMilliSeconds = Date.now();
  var givenDateTimeInMilliSeconds = new Date(dateTimeString);
  var milliSecondsDiff = currentDateTimeInMilliSeconds - givenDateTimeInMilliSeconds;
  var daysDiff = Math.ceil(milliSecondsDiff / (1000 * 3600 * 24));
  return daysDiff;
};
var behindNowSeconds = function behindNowSeconds(dateTimeString) {
  var currentDateTimeInMilliSeconds = Date.now();
  var givenDateTimeInMilliSeconds = new Date(dateTimeString);
  var milliSecondsDiff = currentDateTimeInMilliSeconds - givenDateTimeInMilliSeconds;
  var seconds = Math.ceil(milliSecondsDiff / 1000);
  return seconds;
};
module.exports = {
  behindNowSeconds: behindNowSeconds
};