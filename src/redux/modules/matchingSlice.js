import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api, api_auth } from '../../shared/api';

export const getMatching = createAsyncThunk('matching/getmatching', async (payload, thunkAPI) => {
  const resData = await api
//전체조회
    .get(
      `/friend/?category&address&content&title&pagenum=${payload.pagenum}&pagesize=6`
    )
    .then((res) => res)
    .catch((err) => console.log(err));
  return thunkAPI.fulfillWithValue(resData.data.data);
});

//상세조회
export const getMatchingDetail = createAsyncThunk('matching/getmatchingDetail', async (payload, thunkAPI) => {
  const resData = await api
    .get( `/friend/${payload}`)
    .then((res) => res)
    .catch((err) => console.log(err));
  return thunkAPI.fulfillWithValue(resData.data.data);
});


export const postingMatching = createAsyncThunk('matching/postMatching', async (payload, thunkAPI) => {
  const formData = new FormData();
  formData.append(
    'data',
    new Blob([JSON.stringify(payload.data)], {
      type: 'application/json;charset=UTF-8',
    })
  );
  formData.append('imgUrl', payload.imgUrl[0]);
  formData.append('imgUrl', payload.imgUrl[1]);
  formData.append('imgUrl', payload.imgUrl[2]);
  const resData = await api_auth
    .post('/friend/create', formData)
    .then((res) => res)
    .catch((err) => console.log(err));
  return thunkAPI.fulfillWithValue(resData.data);
});

export const deleteMatchingCard = createAsyncThunk('matching/deleteMatchingCard', async (payload, thunkAPI) => {
  const resData = await api_auth
    .delete( `/friend/${payload}`)
    .then((res) => res)
    .catch((err) => console.log(err));
  return thunkAPI.fulfillWithValue(resData.data);
});

const initialState = {
  getMatching: [],
  isLoaded: false,
  getMatchingDetail: [],
  isEnd: false,
  pageNum: 0,
};

export const matchingSlice = createSlice({
  name: 'getMatching',
  initialState: initialState,
  reducers: {
    pageUp(state, action) {
      if (state.isEnd === false) {
        state.pageNum = state.pageNum + action.payload;
      }
    },
    clearMatchingItem: (state, action) => {
      state.getMatching = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMatching.fulfilled, (state, action) => {
      state.getMatching = [...state.getMatching, ...action.payload];;
    });
    builder.addCase(postingMatching.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoaded =true;
    });
    builder.addCase(getMatchingDetail.fulfilled, (state, action) => {
      state.getMatchingDetail = action.payload;
    });
    builder.addCase(deleteMatchingCard.fulfilled, (state, action) => {
      console.log(action.payload)
    });
  },
});

export const { clearMatchingItem, pageUp, loding } = matchingSlice.actions;
export default matchingSlice.reducer;
