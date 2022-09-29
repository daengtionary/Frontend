import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../shared/api";

//전체 조회
// export const getAllListThunk = createAsyncThunk("listSlice/getAllListThunk", async (payload, thunkAPI) => {
//   console.log(JSON.stringify(payload));
//   const { category, page, title, address, sort, content, nick, size } = payload;
//   const params = {
//     category: "",
//     title,
//     content,
//     nick,
//     address,
//     pagenum: page,
//     pagesize: size,
//     sort,
//     // direction: "dasc",
//   };
//   console.log(payload);
//   const resData = await api
//     .get(`/query`, { params })
//     // .get(`/query?category&title=&content&nick&address=&direction=desc&page=0&size=30&sort=new`)
//     .then((res) => res)
//     .catch((err) => console.log(err));
//   console.log(resData.data.data);
//   return thunkAPI.fulfillWithValue({ data: resData.data.data, page: payload.page });
// });

//무한스크롤, 검색
export const searchListThunk = createAsyncThunk("listSlice/searchListThunk", async (payload, thunkAPI) => {
  console.log(JSON.stringify(payload));
  const { pathname, page, title, address, sort, content, nick, size } = payload;
  console.log(payload);
  const params = {
    title,
    content,
    nick,
    address,
    pagenum: page,
    pagesize: size,
    sort,
    // direction: "dasc",
  };
  const resData = await api
    .get(`${pathname}`, { params })
    .then((res) => res)
    .catch((err) => console.log(err));
  console.log(resData);
  return thunkAPI.fulfillWithValue({ data: resData.data.data, page: payload.page });
});

//카테고리 전환시
export const firstListThunk = createAsyncThunk("listSlice/firstListThunk", async (payload, thunkAPI) => {
  console.log(JSON.stringify(payload));
  const { pathname, page, title, address, sort, content, nick, size } = payload;
  console.log(payload);
  const params = {
    title,
    content,
    nick,
    address,
    pagenum: page,
    pagesize: size,
    sort,
    // direction: "dasc",
  };
  const resData = await api
    .get(`${pathname}`, { params })
    .then((res) => res)
    .catch((err) => console.log(err));
  console.log(resData.data.data);
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
  name: "list", //오류나면 여기도 봐라
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
      console.log(action.payload);
      if (action.payload === 0) {
        state.pageNum = action.payload;
        return;
      }
      if (state.isEnd === false) {
        state.pageNum = state.pageNum + action.payload;
      }
    },
    setChecked(state, action) {
      console.log(action.payload);
      const newArr = Array(state.isChecked.length).fill(false);
      newArr[action.payload.i] = true;
      state.isChecked = newArr;
      state.pageNum = 0;
      state.pathName = action.payload.path;
      console.log(state.pathName);
      console.log(state.isChecked);
    },
  },

  extraReducers: (builder) => {
    // builder.addCase(getAllListThunk.fulfilled, (state, action) => {
    //   state.isLoad = true;
    //   state.getList = [...state.getList, ...action.payload.data];
    //   console.log(state.getList);
    //   console.log(action.payload);
    //   // if ([action.payload].length === 0) {
    //   //   state.isEnd = true;
    //   // }
    // });
    builder.addCase(searchListThunk.fulfilled, (state, action) => {
      state.isLoad = true;
      state.pageNum = action.payload.page;
      if (state.pageNum === 0) {
        state.getList = [...action.payload.data];
      } else if (action.payload.page * action.payload.data.length >= state.getList.length) {
        // console.log(action.payload.page * action.payload.data.length, state.getList.length);
        state.getList = [...state.getList, ...action.payload.data];
      }
      console.log(state.getList);
      if (action.payload.data.length < 4) {
        state.isEnd = true;
      }
    });
    builder.addCase(firstListThunk.fulfilled, (state, action) => {
      state.isLoad = true;
      // state.pageNum = action.payload.pageable.pageNumber;
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
