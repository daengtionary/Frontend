import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, api_auth } from "../../shared/api";

export const mainList = createAsyncThunk(
  "mainSlice/mainList",
  async (payload, thunkAPI) => {
    // var params = new URLSearchParams();
    // params.append("c", "hospital");
    // params.append('doc_password', this.doc_password);
    console.log(JSON.stringify(payload));
    const resData = await api
      .post(`/${payload}?orderby=new&page=1&size=4`)
      .then((res) => res)
      .catch((err) => console.error(err));
    // console.log(params.get("c"));
    console.log(resData.data.data.content);
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
