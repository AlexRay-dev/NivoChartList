import {combineReducers, configureStore} from "@reduxjs/toolkit";
import chartOptionsReducer from "./reducers/chartOptionsSlice";

const rootReducer = combineReducers({
  chartOptionsReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
};
export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];