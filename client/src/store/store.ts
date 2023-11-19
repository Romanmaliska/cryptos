import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import currencyRatesReducer from "slices/currencySlice";
import userAuthReducer from "slices/userAuthSlice";
import { apiSlice } from "slices/userApiSlice";

export const store = configureStore({
  reducer: {
    currencyRates: currencyRatesReducer,
    userAuth: userAuthReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
