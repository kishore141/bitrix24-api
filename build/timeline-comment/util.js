"use strict";

var DaysUtil = require("../util/days");
var getCommentsFromListInPastNumSeconds = function getCommentsFromListInPastNumSeconds(commentList, numSeconds) {
  return commentList.filter(function (comment) {
    return DaysUtil.behindNowSeconds(comment.CREATED) <= numSeconds;
  });
};
module.exports = {
  getCommentsFromListInPastNumSeconds: getCommentsFromListInPastNumSeconds
};