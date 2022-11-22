export interface IChartOptions {
  period: IChartOptionsPeriod,
  interval: IChartOptionsInterval,
  directions: Direction[],
}
export interface IChartOptionsPeriod {
  start: string,
  end: string,
}
export interface IChartOptionsInterval {
  hours: string | null,
  minutes: string | null,
  seconds: string | null,
}
export interface ChartPieDataItem {
  id: string,
  label: string,
  value: number,
  color: string
}
export interface Direction {
  label: string,
  value: string,
}