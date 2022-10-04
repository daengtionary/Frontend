import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api, api_auth } from '../../shared/api';

export const getMatching = createAsyncThunk('trade/getTrade', async (payload, thunkAPI) => {
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
export const getMatchingDetail = createAsyncThunk('trade/getTradeDetail', async (payload, thunkAPI) => {
  const resData = await api
    .get( `/trade/${payload}`)
    .then((res) => res)
    .catch((err) => console.log(err));
  return thunkAPI.fulfillWithValue(resData.data.data);
});

export const postingMatching = createAsyncThunk('trade/postingTrade', async (payload, thunkAPI) => {
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
  console.log(payload);
  const resData = await api_auth
    .post('/trade/create', formData, { 'Content-Type': 'multipart/form-data' })
    .then((res) => res)
    .catch((err) => console.log(err));
  return thunkAPI.fulfillWithValue(resData.data);
});

const initialState = {
  getMatching: [],
  isLoaded: false,
  getMatchingDetail: []
};

export const matchingSlice = createSlice({
  name: 'getMatching',
  initialState: initialState,
  reducers: {
    clearMatchingItem: (state, action) => {
      state.getMatching = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMatching.fulfilled, (state, action) => {
      state.getMatching = [...state.getMatching, ...action.payload];
    });
    builder.addCase(postingMatching.fulfilled, (state, action) => {
      console.log(action.payload);
      state.posts = action.payload;
      state.isLoaded = true
    });
    builder.addCase(getMatchingDetail.fulfilled, (state, action) => {
      state.getMatchingDetail = action.payload;
    });
  },
});

export const { clearMatchingItem } = matchingSlice.actions;
export default matchingSlice.reducer;
