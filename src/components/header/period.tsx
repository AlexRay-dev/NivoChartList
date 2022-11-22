import React, {Dispatch, FC,SetStateAction, useState} from 'react';
import {
  Alert,
  FormControl,
  Snackbar, Stack,
  Typography
} from "@mui/material";
import { StyledPeriodInput } from './styled';
import {TextMaskCustom} from "./utils/period-input-mask";

interface IPeriodProps {
  start: string,
  end: string,
  setStart: Dispatch<SetStateAction<string>>
  setEnd: Dispatch<SetStateAction<string>>
}

const Period: FC<IPeriodProps> = ({setStart, start, end, setEnd}) => {
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  const handleAlertClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setIsAlertOpen(false);
  };

  return (
    <Stack alignItems='center' direction='row' p='10px 0' onClick={() => setIsAlertOpen(true)}>
      <Snackbar open={isAlertOpen} autoHideDuration={6000} onClose={handleAlertClose} >
        <Alert  severity="info" variant='filled'>
          Введите данные в формате "День.Месяц - Часы:Минуты"
        </Alert>
      </Snackbar>

      <Typography variant='body1' mr={2}>Период:</Typography>
      <Typography variant='body1'>с</Typography>

      <FormControl variant="standard">
        <StyledPeriodInput
          required
          value={start}
          onChange={(e) => setStart(e.target.value)}
          size='small'
          name='periodStart'
          id='periodStartInput'
          inputComponent={TextMaskCustom as any}
        />
      </FormControl>

      <Typography variant='body1'>до</Typography>

      <FormControl variant="standard">
        <StyledPeriodInput
          required
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          size='small'
          name='periodEnd'
          id="periodEndInput"
          inputComponent={TextMaskCustom as any}
        />
      </FormControl>
    </Stack>
  );
};

export default Period;