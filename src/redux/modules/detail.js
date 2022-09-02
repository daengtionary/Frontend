import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../shered/request";

/** 게시물 상세 조회 */
export const __getDetailThuck = createAsyncThunk("GET_DETAIL", async (payload, thunkAPI) => {
  try {
    console.log(payload);
    const resp = await instance.get(`shop/${payload}`);

    return console.log(resp.data.data), thunkAPI.fulfillWithValue(resp.data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

const initialState = {
  detail: [],
};

const detail = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {

    /** 게시물 상세 조회 */
    [__getDetailThuck.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.detail = action.payload;
    },
    [__getDetailThuck.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default detail.reducer;