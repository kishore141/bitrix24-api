"use strict";

var DaysUtil = require("../util/days");
var SEVEN_DAYS_IN_SECONDS = 604800;
var getInActiveActivityFromListInPastNumSeconds = function getInActiveActivityFromListInPastNumSeconds(activityList) {
  var seconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SEVEN_DAYS_IN_SECONDS;
  return activityList.filter(function (activity) {
    return DaysUtil.behindNowSeconds(activity.LAST_UPDATED) <= seconds;
  });
};
module.exports = {
  getInActiveActivityFromListInPastNumSeconds: getInActiveActivityFromListInPastNumSeconds
};