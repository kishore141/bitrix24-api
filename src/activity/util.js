const DaysUtil = require("../util/days");

const SEVEN_DAYS_IN_SECONDS = 604800;

const getInActiveActivityFromListInPastNumSeconds = (activityList, seconds = SEVEN_DAYS_IN_SECONDS) => {
  return activityList.filter((activity) => {
    return DaysUtil.behindNowSeconds(activity.LAST_UPDATED) <= seconds;
  });
};

module.exports = {
  getInActiveActivityFromListInPastNumSeconds,
};
