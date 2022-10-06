import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const mainListThunk = createAsyncThunk("mainSlice/mainListThunk", async (payload, thunkAPI) => {
  const params = {
    title: "",
    content: "",
    nick: "",
    address: "",
    pagenum: 0,
    pagesize: "4",
    sort: "popular",
  };
  const resData = await api
    .get(`${payload}/search`, { params })
    .then((res) => res)
    .catch((err) => console.log(err));
  return thunkAPI.fulfillWithValue(resData.data.data);
});
export const mainTradeThunk = createAsyncThunk("mainSlice/mainTradeThunk", async (payload, thunkAPI) => {
  const resData = await api
    .get(`/trade?direction=${payload.direction}&pagenum=${payload.page}&pagesize=${payload.size}&sort=${payload.sort}`)
    .then((res) => res)
    .catch((err) => console.log(err));
  return thunkAPI.fulfillWithValue(resData.data.data);
});
export const mainCommunityThunk = createAsyncThunk("mainSlice/mainCommunityThunk", async (payload, thunkAPI) => {
  const resData = await api
    .get(`/community?direction=${payload.direction}&page=${payload.page}&size=${payload.size}&sort=${payload.sort}`)
    .then((res) => res)
    .catch((err) => console.log(err));
  return thunkAPI.fulfillWithValue(resData.data.data.content);
});

const initialState = {
  mainList: [],
  mainTrade: [],
};

export const mainSlice = createSlice({
  name: "mainPage",
  initialState: initialState,
  reducers: {
    resetMain: (state) => {
      state.mainList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(mainListThunk.fulfilled, (state, action) => {
        state.mainList = [...action.payload];
      })
      .addCase(mainTradeThunk.fulfilled, (state, action) => {
        state.mainList = [...action.payload];
      })
      .addCase(mainCommunityThunk.fulfilled, (state, action) => {
        state.mainList = [...action.payload];
      });
  },
});

export const { resetMain } = mainSlice.actions;
export default mainSlice.reducer;
