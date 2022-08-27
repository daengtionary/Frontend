// Redux import
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { api } from '../../shared/api';

// Thunk 코드 작성
// export const getItemThunk = createAsyncThunk(
//   'item/getItem',
//   async (payload, thunkAPI) => {
//     const resData = await api
//       .get(
//         `/api/iteminfo?page=${payload.page}&size=14&orderby=${payload.orderby}&category=${payload.category}`
//       )
//       .then((res) => res.data);
//     return thunkAPI.fulfillWithValue({
//       data: resData.data,
//       category: payload.category,
//     });
//   }
// );

// export const getSingleItemThunk = createAsyncThunk(
//   'item/getSingleItem',
//   async (payload, thunkAPI) => {
//     const resData = await api
//       .get(`/api/iteminfo/${payload}`)
//       .then((res) => res.data);
//     return thunkAPI.fulfillWithValue(resData.data);
//   }
// );

// const initialState = {
//   is_loaded: false,
//   item_glasses: [],
//   item_sunglasses: [],
//   detail_is_loaded: false,
//   item_single: [],
// };

// export const itemSlice = createSlice({
//   name: 'item',
//   initialState: initialState,
//   reducers: {
//     clearSunglassItem: (state, action) => {
//       state.item_sunglasses = [];
//     },
//     clearGlassItem: (state, action) => {
//       state.item_glasses = [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getItemThunk.fulfilled, (state, action) => {
//       if (action.payload.category === 'glasses') {
//         state.is_loaded = true;
//         state.item_glasses = [...state.item_glasses, ...action.payload.data];
//       } else {
//         state.is_loaded = true;
//         state.item_sunglasses = [
//           ...state.item_sunglasses,
//           ...action.payload.data,
//         ];
//       }
//     });
//     builder.addCase(getSingleItemThunk.fulfilled, (state, action) => {
//       state.detail_is_loaded = true;
//       state.item_single = action.payload;
//     });
//   },
// });

// export const { clearSunglassItem, clearGlassItem } = itemSlice.actions;
// export default itemSlice.reducer;
