import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const mainList = createAsyncThunk(
  "mainSlice/mainList",
  async (payload, thunkAPI) => {
    console.log(JSON.stringify(payload));
    const params = {
      address: "",
      page: "0",
      size: "4",
      sort: "popular",
      direction: "asc",
    };
    const resData = await api
      .get(`/${payload}`, { params })
      // http://localhost:8080/trade?sort=new&page=0&size=10
      .then((res) => res)
      .catch((err) => console.log(err));
    // console.log(params.get("c"));
    console.log(resData.data.data);
    return thunkAPI.fulfillWithValue(resData.data.data.content);
  }
);

const initialState = {
  mainList: [],
};

export const mainSlice = createSlice({
  name: "myPage",
  initialState: initialState,
  reducers: {},
  // extraReducers: {
  //   [mainList.fulfilled]: (state, action) => {
  //     state.mainList = action.payload;
  //     console.log(action.payload);
  //   },
  //   // [myList.fulfilled]: (state, action) => {
  //   //   state.mainList = action.payload;
  //   //   console.log(action.payload);
  //   // },
  //   // [myPageInfo.fulfilled]: (state, action) => {
  //   //   state.mainList = action.payload;
  //   //   console.log(action.payload);
  //   // },
  // },
  extraReducers: (builder) => {
    builder.addCase(mainList.fulfilled, (state, action) => {
      state.mainList = action.payload;
      console.log(action.payload);
    });
  },
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
