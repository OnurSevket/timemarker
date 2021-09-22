export const convertTotalSecondToHoursMinutesSecond = (totalSeconds) => {
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  return {
    hours,
    minutes,
    seconds,
  };
};

export const convertTotalHoursAndMinutesToSecond = (totalTime) => {
  let hoursToSecond = Math.floor(totalTime.hours * 3600);
  let minutesToSecond = Math.floor(totalTime.minutes * 60);
  let totalSeconds = hoursToSecond + minutesToSecond;
  return totalSeconds;
};
