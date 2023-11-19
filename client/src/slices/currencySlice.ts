import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CurrencyState, CurrencyRates } from "../types/common";
import * as currencyApi from "../API/currencyApi";
import { RootState } from "../store/store";

const initialState: CurrencyState = {
  currentCurrency: "USD",
  currencyRates: {},
  status: "idle",
  error: null,
};

export const fetchCurrencyRates = createAsyncThunk(
  "currencyRates/getCurrencyRates",
  async (currentCurrency: CurrencyState["currentCurrency"]) => {
    const currencyRates: CurrencyRates = await currencyApi.getCurrencyRates();

    return  {currencyRates, currentCurrency };
  }
);


export const currencyRatesSlice = createSlice({
  name: "currencyRates",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyRates.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrencyRates.fulfilled, (state, action) => {
        state.status = "idle";
        state.currentCurrency = action.payload.currentCurrency;
        state.currencyRates = action.payload.currencyRates; 
      })
      .addCase(fetchCurrencyRates.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default currencyRatesSlice.reducer;
export const selectCurrencyRates = (state: RootState) => state.currencyRates;
