import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const mainList = createAsyncThunk(
  "mainPage/mainList",
  async (payload, thunkAPI) => {
    // var params = new URLSearchParams();
    // params.append("c", "hospital");
    // params.append('doc_password', this.doc_password);
    const resData = await api
      .post(`/hospital?orderby=new&page=1&size=4`)
      .then((res) => res)
      .catch((err) => console.err(err));
    // console.log(params.get("c"));
    console.log(resData.data.data.content);
    return thunkAPI.fulfillWithValue(resData.data.data.content);
  }
);

const initialState = {};

export const mainSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [mainList.fulfilled]: (state, action) => {
      state.mainList = action.payload;
      console.log(action.payload);
    },
  },
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
