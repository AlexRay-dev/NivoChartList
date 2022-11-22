import React, { FC, useEffect, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {ComponentInner} from '../../core/styled-components/component-inner';
import {useTypedSelector} from "../../core/hooks/redux";
import {selectChartOptions} from "../../core/store/reducers/chartOptionsSlice";
import {ResponsivePie} from '@nivo/pie';
import {ChartPieDataItem} from "../../core/types/types";
import {generateChartPieData} from './utils/utils'

const ChartPie: FC = () => {
  const [data, setData] = useState<ChartPieDataItem[]>([]);
  const chartOptions = useTypedSelector(selectChartOptions);

  useEffect(() => {
    // @ts-ignore
    setData(generateChartPieData())
  }, [chartOptions]);

  return (
    <ComponentInner sx={{maxWidth: '350px'}}>
      <Stack direction='row' alignItems='center' flexWrap='wrap' pb='15px'>
        <Typography variant='h4' mr={2}>Состав потока</Typography>

        <Stack direction='row'>
          <Typography variant='body1' mr={2}>
            {chartOptions.period.start && `c ${chartOptions.period.start}`}
          </Typography>
          <Typography variant='body1' mr={2}>
            {chartOptions.period.end && `до ${chartOptions.period.end}`}
          </Typography>
        </Stack>
      </Stack>

      <Box height='180px'>
        <ResponsivePie
          data={data}
          margin={{top: 10, right: 10, bottom: 10, left: 10}}
          innerRadius={0.95}
          borderWidth={2}
          cornerRadius={3}
          padAngle={2}
          enableArcLinkLabels={false}
          enableArcLabels={false}
          activeOuterRadiusOffset={3}
          legends={[
            {
              anchor: 'right',
              direction: 'column',
              justify: false,
              translateX: 50,
              translateY: 0,
              itemWidth: 101,
              itemHeight: 20,
              itemsSpacing: 15,
              symbolSize: 8,
              itemDirection: 'left-to-right'
            }
          ]}
        />
      </Box>
    </ComponentInner>

  );
};

export default ChartPie;