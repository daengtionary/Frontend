import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_auth } from "../../shared/api";

//formdata 전송 테스트용
export const myList = createAsyncThunk(
  "myPageSlice/myList",
  async (payload, thunkAPI) => {
    for (const keyValue of payload) console.log(keyValue);
    // console.log(payload.get("image"));
    // const frm = new FormData();
    // frm.append("image", payload.img);
    // frm.append("name", payload.dogs.dogname);
    // frm.append("breed", payload.dogs.dogbreed);
    // frm.append("gender", payload.dogs.dogsex);
    // frm.append("weight", payload.dogs.dogweight);
    const resData = await api_auth
      .post(`/mypage/dogs`, payload, {
        // headers: { "Content-Type": "multipart/form-data" },
        // data: { payload },
      })
      .then((res) => res)
      .catch((err) => console.log(err));
    console.log(resData);
    return thunkAPI.fulfillWithValue(resData.data);
  }
);
//mypage get 테스트용
export const myPageInfo = createAsyncThunk(
  "myPageSlice/myPageInfo",
  async (payload, thunkAPI) => {
    const resData = await api_auth
      .get(`/mypage/info`, payload)
      .then((res) => res)
      .catch((err) => console.error(err));
    console.log(resData);
    return thunkAPI.fulfillWithValue(resData.data.data);
  }
);
//mydog get 테스트용
export const myDogInfo = createAsyncThunk(
  "myPageSlice/myDogInfo",
  async (payload, thunkAPI) => {
    const resData = await api_auth
      .get(`/mypage/info`, payload)
      .then((res) => res)
      .catch((err) => console.error(err));
    console.log(resData.data.data.dogs[payload]);
    return thunkAPI.fulfillWithValue(resData.data.data.dogs[payload]);
  }
);

const initialState = {
  myList: {},
  myPageInfo: { dogs: [] },
  myDogInfo: {},
};

export const myPageSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(myList.fulfilled, (state, action) => {
        state.myList = action.payload;
        console.log(action.payload);
      })
      .addCase(myPageInfo.fulfilled, (state, action) => {
        state.myPageInfo = action.payload;
      })
      .addCase(myDogInfo.fulfilled, (state, action) => {
        state.myDogInfo = action.payload;
        console.log(action.payload);
      });
  },
});

export const {} = myPageSlice.actions;
export default myPageSlice.reducer;
