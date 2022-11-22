import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {IChartOptions} from "../../types/types";

const initialState: IChartOptions = {
  period: {
    start: '',
    end: '',
  },
  interval: {
    hours: '',
    minutes: '',
    seconds: '',
  },
  directions: [],
};

const chartOptionsSlice = createSlice({
  name: "chartOptions",
  initialState,
  reducers: {
    setChartOptions(state, action: PayloadAction<IChartOptions>) {
      return state = action.payload;
    }
  }
});

export const {
  setChartOptions,
} = chartOptionsSlice.actions;
export const selectChartOptions = (state: RootState) => state.chartOptionsReducer;
export default chartOptionsSlice.reducer;