import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, api_auth } from "../../shared/api";

export const getTrade = createAsyncThunk(
  "tradeSlice/getTrade",
  async (payload, thunkAPI) => {
    const resData = await api
      .get(
        `/trade?pagenum=${payload.page}&pagesize=${payload.size}&sort=${payload.sort}`
        // `/trade/search?direction=${payload.direction}&page=${payload.page}&size=${payload.size}&sort=${payload.sort}`

      )
      .then((res) => res)
      .catch((err) => console.log(err));
    return thunkAPI.fulfillWithValue(resData.data.data);
  }
);

export const addTrade = createAsyncThunk(
  "tradeSlice/addTrade",
  async (payload, thunkAPI) =>{
    for (const keyValue of payload) console.log(keyValue);
    const resData = await api_auth
    .post(
      `/trade/create`,payload
    )
    .then((res)=>res)
    .catch((err)=>console.log(err))
    return thunkAPI.fulfillWithValue(resData.data);
  }
)

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
