import React, {Dispatch, FC, SetStateAction} from 'react';
import {MultiSelect} from "react-multi-select-component";
import {multiSelectLocalization, directions} from "../../core/consts/consts";
import {Box} from "@mui/material";
import {Direction} from "../../core/types/types";

interface IChartOptionsProps {
  selected: Direction[],
  setSelected: Dispatch<SetStateAction<Direction[]>>
}

const ChartOptions: FC<IChartOptionsProps> = ({selected,setSelected}) => {
  return (
    <Box width='300px' p='10px 0'>
      <MultiSelect
        options={directions}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        hasSelectAll={false}
        overrideStrings={multiSelectLocalization}
        ClearSelectedIcon={null}/>
    </Box>
  );
};

export default ChartOptions;