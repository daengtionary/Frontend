import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const getList = createAsyncThunk(
  "listSlice/getList",
  async (payload, thunkAPI) => {
    console.log(JSON.stringify(payload));
    const params = {
      address: "",
      page: "0",
      size: "10",
      sort: "popular",
      direction: "asc",
    };
    const resData = await api
      .get(`${payload}`, { params })
      .then((res) => res)
      .catch((err) => console.log(err));
    console.log(resData.data.data);
    return thunkAPI.fulfillWithValue(resData.data.data.content);
  }
);

const initialState = {
  getList: [],
};

export const listSlice = createSlice({
  name: "listPage",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      state.getList = action.payload;
      console.log(action.payload);
    });
  },
});

export const {} = listSlice.actions;
export default listSlice.reducer;
