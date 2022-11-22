import {ResponsiveLine, Serie} from '@nivo/line';
import React, {FC, useEffect, useState} from 'react';
import {ComponentInner} from '../../core/styled-components/component-inner';
import {useTypedSelector} from "../../core/hooks/redux";
import {selectChartOptions} from "../../core/store/reducers/chartOptionsSlice";
import {generateChartLineData} from './utils/utils';
import {Box, Stack, Typography} from "@mui/material";

const ChartLine: FC = () => {
  const [data, setData] = useState<Serie[]>([]);
  const chartOptions = useTypedSelector(selectChartOptions);

  useEffect(() => {
    setData(generateChartLineData(chartOptions))
  }, [chartOptions]);

  return (
    <ComponentInner>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' flexWrap='wrap'>
          <Typography variant='h4' mr={2}>Средняя скорость</Typography>

          <Stack direction='row'>
            <Typography variant='body1' mr={2}>
              {chartOptions.period.start && `c ${chartOptions.period.start}`}
            </Typography>
            <Typography variant='body1' mr={2}>
              {chartOptions.period.end && `до ${chartOptions.period.end}`}
            </Typography>
          </Stack>
        </Stack>

        <Box sx={{height: '80px', width: '100%', maxWidth: '120px'}}>
          <ResponsiveLine
            data={data}
            legends={[
              {
                anchor: 'right',
                direction: 'column',
                justify: true,
                itemWidth: 90,
                itemHeight: 15,
                itemsSpacing: 1,
                symbolSize: 8,
                symbolShape: 'circle',
                itemDirection: 'left-to-right',
                itemTextColor: '#777',
              }
            ]}
            areaOpacity={0}
            enableGridX={false}
            enableGridY={false}
            enableSlices={false}
            enablePoints={false}
            lineWidth={0}/>
        </Box>
      </Stack>

      <Box height='220px' mt='-10px'>
        <ResponsiveLine
          data={data}
          margin={{
            top: 30,
            left: 28,
            right: 5,
            bottom: 15,
          }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
          }}
          axisBottom={{
            tickPadding: 2,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: 'middle',
            tickSize: 0,
          }}
          axisLeft={{
            tickPadding: 10,
            tickRotation: 0,
            legendOffset: 36,
            tickSize: 0,
          }}
          curve={"catmullRom"}
          lineWidth={2}
          pointSize={7}
          enableGridX={false}
          useMesh={true}
        />
      </Box>
    </ComponentInner>
  );
};

export default ChartLine;