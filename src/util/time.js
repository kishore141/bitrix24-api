const DaysToSeconds = (days = 7) => {
  const seconds = 60 * 60 * 24 * days;
  return seconds;
};

module.exports = {
  DaysToSeconds,
};
