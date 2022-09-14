import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from '../../shared/api';

/** 게시글 전체 조회 */
export const getCommunityPostListThunk = createAsyncThunk("GET_COMMUNITY_POST_LIST", async (payload, thunkAPI) => {
  try {
    console.log(payload);
    // const resp = await api.get(`/community?orderby=new&size=10&page=0`);
    const resp = await api.get(`/community?page=0&size=10&sort=new&direction=asc`);

    return (console.log(resp), thunkAPI.fulfillWithValue(resp.data.data.content))
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

/** 게시글 상세 조회 */
export const getCommunityDetailThunk = createAsyncThunk("GET_COMMUNITY_DETAIL", async (payload, thunkAPI) => {
  try {
    console.log(payload);
    const resp = await api.get(`/community/${payload}`);

    return (console.log(resp), thunkAPI.fulfillWithValue(resp.data.data))
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

/** 게시글 둥록 */
export const getCommunityPostThunk = createAsyncThunk("GET_COMMUNITY_POST", async (payload, thunkAPI) => {
  try {
    console.log(payload);
    const resp = await api.post(`/community/${payload}`);

    return (console.log(resp), thunkAPI.fulfillWithValue(resp.data.data))
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

/** 게시글 수정 */
export const getCommunityUpdateThunk = createAsyncThunk("GET_COMMUNITY_UPDATE", async (payload, thunkAPI) => {
  try {
    console.log(payload);
    const resp = await api.patch(`/community/${payload}`);

    return (console.log(resp), thunkAPI.fulfillWithValue(resp.data.data))
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

/** 게시글 삭제 */
export const getCommunityDeleteThunk = createAsyncThunk("GET_COMMUNITY_DELETE", async (payload, thunkAPI) => {
  try {
    console.log(payload);
    const resp = await api.delete(`/community/${payload}`);

    return (console.log(resp), thunkAPI.fulfillWithValue(resp.data.data))
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

const initialState = {
  community: [],
};

const detailSlice = createSlice({
  name: "community",
  initialState,
  reducers: {},
  extraReducers: {

    /** 게시물 전체 조회 */
    [getCommunityPostListThunk.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.community = action.payload;
    },
    [getCommunityPostListThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },

    /** 게시물 상세 조회 */
    [getCommunityDetailThunk.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.community = action.payload;
    },
    [getCommunityDetailThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default detailSlice.reducer;