import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const getList = createAsyncThunk(
  "listSlice/getList",
  async (payload, thunkAPI) => {
    console.log(JSON.stringify(payload));
    const { pathname, page, address, sort, size } = payload;
    console.log(payload);
    const params = {
      address,
      page,
      size,
      sort,
      direction: "dasc",
    };
    const resData = await api
      .get(`${pathname}`, { params })
      .then((res) => res)
      .catch((err) => console.log(err));
    console.log(resData.data.data);
    return thunkAPI.fulfillWithValue(resData.data.data.content);
  }
);
// export const getListFirst = createAsyncThunk(
//   "listSlice/getListFirst",
//   async (payload, thunkAPI) => {
//     console.log(JSON.stringify(payload));
//     const { pathname, page, address } = payload;
//     console.log(payload);
//     const params = {
//       address,
//       page,
//       size: "2",
//       sort: "new",
//       direction: "asc",
//     };
//     const resData = await api
//       .get("/hospital?address=인천&page=0&size=10&sort=new&direction=asc")
//       // .get(`${pathname}`, { params })
//       .then((res) => res)
//       .catch((err) => console.log(err));
//     console.log(resData?.data.data);
//     return thunkAPI.fulfillWithValue(resData.data.data.content);
//   }
// );
export const searchList = createAsyncThunk(
  "listSlice/searchList",
  async (payload, thunkAPI) => {
    console.log(JSON.stringify(payload));
    const { pathname, page, title, address, sort, content, nick, size } =
      payload;
    console.log(payload);
    const params = {
      title,
      content,
      nick,
      address,
      page,
      size,
      sort,
      direction: "dasc",
    };
    const resData = await api
      .get(`${pathname}/search`, { params })
      // .get(
      //   "/hospital/search?title=정서&content&nick&address=인천&direction=asc&page=0&size=10&sort=new"
      // )

      .then((res) => res)
      .catch((err) => console.log(err));
    console.log(resData.data.data);
    return thunkAPI.fulfillWithValue(resData.data.data.content);
  }
);

const initialState = {
  isLoad: false,
  isEnd: false,
  getList: [],
  getListFirst: [],
  searchList: [],
};

export const listSlice = createSlice({
  name: "listPage",
  initialState: initialState,
  reducers: {
    reset(state) {
      Object.assign(state, initialState);
    },
    resetLoad(state) {
      state.isLoad = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      state.isLoad = true;
      state.getList = [...state.getList, ...action.payload];
      console.log(state.getList);
      console.log(action.payload);
      if ([action.payload].length === 0) {
        state.isEnd = true;
      }
    });
    // builder.addCase(getListFirst.fulfilled, (state, action) => {
    //   state.getList = [];
    //   console.log(state.getList);
    //   console.log(action.payload);
    // });
    builder.addCase(searchList.fulfilled, (state, action) => {
      state.isLoad = true;
      state.getList = [...state.getList, ...action.payload];
      console.log(state.searchList);
      console.log(action.payload);
      if (action.payload.length < 4) {
        state.isEnd = true;
      }
    });
  },
});

export const { reset, resetLoad } = listSlice.actions;
export default listSlice.reducer;
