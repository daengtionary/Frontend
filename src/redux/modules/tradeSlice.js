import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const getTrade = createAsyncThunk(
  "tradeSlice/getTrade",
  async (payload, thunkAPI) => {
    const resData = await api
      .get(
        `/trade?direction=${payload.direction}&page=${payload.page}&size=${payload.size}&sort=${payload.sort}`
      )
      .then((res) => res)
      .catch((err) => console.log(err));
    return thunkAPI.fulfillWithValue(resData.data.data.content);
  }
);

const initialState = {
  getTrade: [],
  isLoaded: false,
};

export const tradeSlice = createSlice({
  name: "getTrade",
  initialState: initialState,
  reducers: {
    clearTradeItem: (state, action) => {
      state.getTrade = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getTrade.fulfilled, (state, action) => {
      state.getTrade = [...state.getTrade, ...action.payload];
    });
  },
});

export const { clearTradeItem } = tradeSlice.actions;
export default tradeSlice.reducer;
