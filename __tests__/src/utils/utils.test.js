import {
  convertTotalHoursAndMinutesToSecond,
  convertTotalSecondToHoursMinutesSecond,
} from "../../../src/utils";

test("total seconds to hours ,minutes ,second", () => {
  let totalSecond = 28565;
  const result = convertTotalSecondToHoursMinutesSecond(totalSecond);
  expect(result.hours).toBe(7);
  expect(result.minutes).toEqual(56);
  expect(result.seconds).toEqual(5);
});

test("hours and minutes to total seond", () => {
  let totalTime = {
    hours: 1,
    minutes: 35,
  };

  const result = convertTotalHoursAndMinutesToSecond(totalTime);
  expect(result).toBe(5700);
});
