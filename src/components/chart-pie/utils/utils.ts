import {ChartPieDataItem} from "../../../core/types/types";

export function generateChartPieData() {
  const data: ChartPieDataItem[] = [];

  for (let i = 0; i < 5; i++) {
    const chartPieDataItem = {
      id: `id-${++i}`,
      label: 'string',
      value: i,
      color: "black"
    };
    data.push(chartPieDataItem);
  }

  return data;
}