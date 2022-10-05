import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, api_auth } from "../../shared/api";

/** 게시글 전체 조회 */
export const getCommunityPostListThunk = createAsyncThunk("GET_COMMUNITY_POST_LIST", async (payload, thunkAPI) => {
  try {
    const resp = await api.get(`/community?sort=new&pagenum=${payload}&pagesize=5`);
    return thunkAPI.fulfillWithValue(resp.data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

/** 게시글 상세 조회 */
export const getCommunityDetailThunk = createAsyncThunk("GET_COMMUNITY_DETAIL", async (payload, thunkAPI) => {
  try {
    const resp = await api.get(`community/${payload}?pagenum=0&pagesize=5`);
    return thunkAPI.fulfillWithValue(resp.data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

/** 게시글 등록 */
export const getCommunityPostThunk = createAsyncThunk("GET_COMMUNITY_POST", async (payload, thunkAPI) => {
  try {
    const formData = new FormData();
    formData.append(
      "data",
      new Blob([JSON.stringify(payload.data)], {
        type: "application/json;charset=UTF-8",
      })
    );

    for (let i = 0; payload.imgUrl.length > i; i++) {
      formData.append("imgUrl", payload.imgUrl[i]);
    }

    const resp = await api_auth.post("/community/create", formData, { "Content-Type": "multipart/form-data" });
    return thunkAPI.fulfillWithValue(resp.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

/** 게시글 수정 */
export const getCommunityUpdateThunk = createAsyncThunk("GET_COMMUNITY_UPDATE", async (payload, thunkAPI) => {
  try {
    const resp = await api_auth.patch(`/community/${payload}`);
    return thunkAPI.fulfillWithValue(resp.data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

/** 게시글 삭제 */
export const getCommunityDeleteThunk = createAsyncThunk("GET_COMMUNITY_DELETE", async (payload, thunkAPI) => {
  try {
    const resp = await api_auth.delete(`/community/${payload}`);
    return thunkAPI.fulfillWithValue(resp.data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.code);
  }
});

const initialState = {
  community: [],
  communityDetail: [],
  editedPost: [],
  pageNum: 0,
  isEnd: false,
  isPosted: false,
};

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    pageUp(state, action) {
      console.log(action.payload);
      if (state.isEnd === false) {
        state.pageNum = state.pageNum + action.payload;
      }
    },
    resetPosted(state) {
      state.community = initialState.community;
    },
  },
  extraReducers: {
    /** 게시글 전체 조회 */
    [getCommunityPostListThunk.fulfilled]: (state, action) => {
      state.community = [...state.community, ...action.payload];
      if (action.payload.length < 5) {
        state.isEnd = true;
      }
    },
    [getCommunityPostListThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },

    /** 게시글 상세 조회 */
    [getCommunityDetailThunk.fulfilled]: (state, action) => {
      state.communityDetail = action.payload;
    },
    [getCommunityDetailThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },

    /** 게시글 삭제 */
    [getCommunityDeleteThunk.fulfilled]: (state, action) => {},
    [getCommunityDeleteThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },

    /** 게시글 수정 */
    [getCommunityUpdateThunk.fulfilled]: (state, action) => {
      state.editedPost = action.payload;
    },
    [getCommunityUpdateThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },

    /** 게시글 등록 */
    [getCommunityPostThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isPosting = !state.isPosting;
    },
    [getCommunityPostThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { pageUp, resetPosted } = communitySlice.actions;
export default communitySlice.reducer;
