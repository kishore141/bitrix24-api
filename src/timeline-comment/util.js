const DaysUtil = require("../util/days");

const getCommentsFromListInPastNumSeconds = (commentList, numSeconds) => {
  return commentList.filter((comment) => {
    return DaysUtil.behindNowSeconds(comment.CREATED) <= numSeconds;
  });
};

module.exports = {
  getCommentsFromListInPastNumSeconds,
};
