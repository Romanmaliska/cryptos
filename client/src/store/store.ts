import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import currencyRatesReducer from "./currencySlice";

export const store = configureStore({
  reducer: {
    currencyRates: currencyRatesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
