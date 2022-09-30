import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from '../../shared/api';

/** 게시물 상세 조회 */
export const getDetailThunk = createAsyncThunk("GET_DETAIL", async (payload, thunkAPI) => {
  try {
    console.log(payload);
    const resp = await api.get(`hospital/${payload}?pagenum=0&pagesize=5`);

    return (console.log(resp), thunkAPI.fulfillWithValue(resp.data.data))
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

/** 게시물 댓글 작성 */
// export const postDetailCommentThunk = createAsyncThunk("POST_DETAIL_COMMENT", async (payload, thunkAPI) => {
//   try {
//     console.log(payload);
//     const resp = await api.get(`hospital/${payload}`);

//     return (console.log(resp), thunkAPI.fulfillWithValue(resp.data.data))
//   } catch (err) {
//     return thunkAPI.rejectWithValue(err.code);
//   }
// });

const initialState = {
  detail: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {

    /** 게시물 상세 조회 */
    [getDetailThunk.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.detail = action.payload;
    },
    [getDetailThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default detailSlice.reducer;