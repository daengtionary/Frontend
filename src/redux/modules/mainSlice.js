import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const mainList = createAsyncThunk(
  "mainSlice/mainList",
  async (payload, thunkAPI) => {
    console.log(JSON.stringify(payload));
    const params = {
      title: "",
      content: "",
      nick: "",
      address: "",
      page: 0,
      size: "4",
      sort: "popular",
      direction: "dasc",
    };
    const resData = await api
      .get(`${payload}/search`, { params })
      // http://localhost:8080/trade?sort=new&page=0&size=10
      .then((res) => res)
      .catch((err) => console.log(err));
    // console.log(params.get("c"));
    console.log(resData.data.data);
    return thunkAPI.fulfillWithValue(resData.data.data.content);
  }
);
export const mainTrade = createAsyncThunk(
  "mainSlice/mainTrade",
  async (payload, thunkAPI) => {
    const resData = await api
      .get(
        `/${payload.category}?direction=${payload.direction}&page=${payload.page}&size=${payload.size}&sort=${payload.sort}`
      )
      .then((res) => res)
      .catch((err) => console.log(err));
    return thunkAPI.fulfillWithValue(resData.data.data.content);
  }
);

const initialState = {
  mainList: [],
  mainTrade: [],
};

export const mainSlice = createSlice({
  name: "myPage",
  initialState: initialState,
  reducers: {
    resetMain: (state) => {
      state.mainList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(mainList.fulfilled, (state, action) => {
        state.mainList = action.payload;
        console.log(action.payload);
      })
      .addCase(mainTrade.fulfilled, (state, action) => {
        state.mainList = action.payload;
        console.log(action.payload);
      });
  },
});

export const { resetMain } = mainSlice.actions;
export default mainSlice.reducer;
