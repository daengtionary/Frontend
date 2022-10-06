import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const searchListThunk = createAsyncThunk("listSlice/searchListThunk", async (payload, thunkAPI) => {
  const { pathname, page, title, address, sort, content, nick, size } = payload;
  const params = {
    title,
    content,
    nick,
    address,
    pagenum: page,
    pagesize: size,
    sort,
  };
  const resData = await api
    .get(`${pathname}`, { params })
    .then((res) => res)
    .catch((err) => console.log(err));
  return thunkAPI.fulfillWithValue({ data: resData.data.data, page: payload.page });
});

export const firstListThunk = createAsyncThunk("listSlice/firstListThunk", async (payload, thunkAPI) => {
  const { pathname, page, title, address, sort, content, nick, size } = payload;
  const params = {
    title,
    content,
    nick,
    address,
    pagenum: page,
    pagesize: size,
    sort,
  };
  const resData = await api
    .get(`${pathname}`, { params })
    .then((res) => res)
    .catch((err) => console.log(err));
  return thunkAPI.fulfillWithValue({ data: resData.data.data, page: payload.page });
});

const initialState = {
  isLoad: false,
  isEnd: false,
  getList: [],
  getListFirst: [],
  searchList: [],
  pageNum: 0,
  isChecked: [true, false, false, false],
  pathName: "place",
};

export const listSlice = createSlice({
  name: "list",
  initialState: initialState,
  reducers: {
    reset(state) {
      Object.assign(state, initialState);
    },
    resetLoad(state) {
      state.isLoad = false;
    },
    resetEnd(state) {
      state.isEnd = false;
    },
    pageUp(state, action) {
      if (action.payload === 0) {
        state.pageNum = action.payload;
        return;
      }
      if (state.isEnd === false) {
        state.pageNum = state.pageNum + action.payload;
      }
    },
    setChecked(state, action) {
      const newArr = Array(state.isChecked.length).fill(false);
      newArr[action.payload.i] = true;
      state.isChecked = newArr;
      state.pageNum = 0;
      state.pathName = action.payload.path;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(searchListThunk.fulfilled, (state, action) => {
      state.isLoad = true;
      state.pageNum = action.payload.page;
      if (state.pageNum === 0) {
        state.getList = [...action.payload.data];
      } else if (action.payload.page * 4 >= state.getList.length) {
        state.getList = [...state.getList, ...action.payload.data];
      }
      if (action.payload.data.length < 4) {
        state.isEnd = true;
      }
    });
    builder.addCase(firstListThunk.fulfilled, (state, action) => {
      state.isLoad = true;
      state.pageNum = 0;
      state.getList = [...action.payload.data];
      if (action.payload.data.length < 4) {
        state.isEnd = true;
      }
    });
  },
});

export const { reset, resetLoad, resetEnd, pageUp, setChecked } = listSlice.actions;
export default listSlice.reducer;
