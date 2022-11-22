import React, {FC, useState} from 'react';
import Period from "./period";
import Interval from "./interval";
import {useTypedDispatch} from "../../core/hooks/redux";
import {Stack} from "@mui/material";
import ChartOptions from "./chart-options";
import {Direction, IChartOptions} from "../../core/types/types";
import {setChartOptions} from "../../core/store/reducers/chartOptionsSlice";
import {ComponentInner} from '../../core/styled-components/component-inner';
import {StyledButton} from '../../core/styled-components/button';
import {hoursOptions, minutesAndSecondsOptions} from "../../core/consts/consts";

const Header: FC = () => {
  const [periodStart, setPeriodStart] = useState<string>('12.05 00:00');
  const [periodEnd, setPeriodEnd] = useState<string>('13.05 00:00');
  const [hours, setHours] = useState<string | null>(hoursOptions[1]);
  const [minutes, setMinutes] = useState<string | null>(minutesAndSecondsOptions[0]);
  const [seconds, setSeconds] = useState<string | null>(minutesAndSecondsOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState<Direction[]>([]);
  const dispatch = useTypedDispatch();

  const onSubmitHandler = () => {
    const chartOptions: IChartOptions = {
      period: {
        start: periodStart,
        end: periodEnd,
      },
      interval: {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      },
      directions: selectedOptions,
    }
    dispatch(setChartOptions(chartOptions));
  }

  return (
    <header>
      <ComponentInner>
        <Stack justifyContent='space-between' alignItems='center' direction='row' flexWrap='wrap'>
          <Period start={periodStart} setStart={setPeriodStart} end={periodEnd} setEnd={setPeriodEnd}/>
          <Interval hours={hours} setHours={setHours} minutes={minutes} setMinutes={setMinutes} seconds={seconds}
                    setSeconds={setSeconds}/>
          <ChartOptions selected={selectedOptions} setSelected={setSelectedOptions}/>
          <StyledButton sx={{margin: '10px 0'}} onClick={onSubmitHandler}>Построить</StyledButton>
        </Stack>
      </ComponentInner>
    </header>
  );
};

export default Header;