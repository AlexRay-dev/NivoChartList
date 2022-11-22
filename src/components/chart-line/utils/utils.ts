import {differenceInMilliseconds} from "date-fns";
import {IChartOptions, IChartOptionsInterval, IChartOptionsPeriod} from "../../../core/types/types";
import {Serie} from "@nivo/line";
import {getRandomIntInclusive} from "../../../core/utils/get-random-int";

export function generateChartLineData(chartOptions: IChartOptions) {
  const {directions, period, interval} = chartOptions;
  const result: Serie[] = [];
  const dataLength = getDataLength(period, interval);

  for (let direction of directions) {
    const id = direction.value;
    const color = '#000';
    const data = [];

    for (let i = 0; i < dataLength; i++) {
      const x = i;
      const y = getRandomIntInclusive(0, 45);
      data.push({x, y});
    }

    result.push({id, color, data});
  }
  return result;
}

export function getDataLength(period: IChartOptionsPeriod, interval: IChartOptionsInterval) {
  const intervalInMilliseconds = getMillisecondsFromInterval(interval);
  const periodDifference = getPeriodDifferenceInMilliseconds(period);
  return Math.ceil(periodDifference / intervalInMilliseconds);
}

export function getMillisecondsFromInterval(interval: IChartOptionsInterval) {
  const {hours, minutes, seconds} = interval;
  const hoursInMilliseconds = hours ? (parseInt(hours) * 3600000) : 0;
  const minutesInMilliseconds = minutes ? (parseInt(minutes) * 60000) : 0;
  const secondsInMilliseconds = seconds ? (parseInt(seconds) * 1000) : 0;
  return hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds;
}

export function getPeriodDifferenceInMilliseconds(period: IChartOptionsPeriod) {
  if (period.start === '' || period.end === '') return 0;
  const periodStartDate = period.start.split(' ')[0];
  const periodStartDateDay = parseInt(periodStartDate.split('.')[0]);
  const periodStartDateMonth = parseInt(periodStartDate.split('.')[1]);
  const periodStartTime = period.start.split(' ')[1];
  const periodStartTimeHour = parseInt(periodStartTime.split(':')[0]);
  const periodStartTimeMinutes = parseInt(periodStartTime.split(':')[1]);
  const periodEndDate = period.end.split(' ')[0];
  const periodEndDateDay = parseInt(periodEndDate.split('.')[0]);
  const periodEndDateMonth = parseInt(periodEndDate.split('.')[1]);
  const periodEndTime = period.end.split(' ')[1];
  const periodEndTimeHour = parseInt(periodEndTime.split(':')[0]);
  const periodEndTimeMinutes = parseInt(periodEndTime.split(':')[1]);

  return differenceInMilliseconds(
    new Date(2022,
      periodEndDateMonth - 1,
      periodEndDateDay,
      periodEndTimeHour,
      periodEndTimeMinutes),
    new Date(2022,
      periodStartDateMonth - 1,
      periodStartDateDay,
      periodStartTimeHour,
      periodStartTimeMinutes)
  )
}