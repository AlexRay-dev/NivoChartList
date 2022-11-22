import React, {Dispatch, FC, SetStateAction} from 'react';
import {Autocomplete, Stack, TextField, Typography} from "@mui/material";
import {hoursOptions, minutesAndSecondsOptions} from "../../core/consts/consts";

interface IIntervalProps {
  hours: string | null,
  setHours: Dispatch<SetStateAction<string | null>>,
  minutes: string | null,
  setMinutes: Dispatch<SetStateAction<string | null>>,
  seconds: string | null,
  setSeconds: Dispatch<SetStateAction<string | null>>,
}

const Interval: FC<IIntervalProps> = ({hours, setHours, minutes, setMinutes, seconds, setSeconds}) => {
  return (
    <Stack alignItems='center' direction='row' p='10px 0' flexWrap='wrap'>
      <Typography variant='body1' mr='20px'>Интервал:</Typography>

      <Stack direction='row'>
        <Stack alignItems='center' direction='row'>
          <Autocomplete
            value={hours}
            onChange={(event: any, newValue: string | null) => {
              setHours(newValue);
            }}
            disablePortal
            id="combo-box-hours"
            options={hoursOptions}
            renderInput={(params) => <TextField {...params}/>}
            size={"small"}
            clearIcon={null}
            sx={{width: "65px", marginRight: "10px"}}/>
          <Typography variant='body1' mr='10px'> ч.</Typography>
        </Stack>

        <Stack alignItems='center' direction='row'>
          <Autocomplete
            value={minutes}
            onChange={(event: any, newValue: string | null) => {
              setMinutes(newValue);
            }}
            disablePortal
            id="combo-box-minutes"
            options={minutesAndSecondsOptions}
            renderInput={(params) => <TextField {...params} />}
            size={"small"}
            clearIcon={null}
            sx={{width: "65px", marginRight: "10px"}}/>
          <Typography variant='body1' mr='10px'> м.</Typography>
        </Stack>

        <Stack alignItems='center' direction='row'>
          <Autocomplete
            value={seconds}
            onChange={(event: any, newValue: string | null) => {
              setSeconds(newValue);
            }}
            disablePortal
            id="combo-box-seconds"
            options={minutesAndSecondsOptions}
            renderInput={(params) => <TextField {...params} />}
            size={"small"}
            clearIcon={null}
            sx={{width: "65px", marginRight: "10px"}}/>
          <Typography variant='body1' mr='10px'> с.</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Interval;