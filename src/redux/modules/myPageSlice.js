import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { api_auth } from "../../shared/api";

//강아지 프로필 등록
export const addDog = createAsyncThunk(
  "myPageSlice/addDog",
  async (payload, thunkAPI) => {
    for (const keyValue of payload) console.log(keyValue);
    const resData = await api_auth
      .post(`/mypage/dogs`, payload, {})
      .then((res) => res)
      .catch((err) => console.log(err));
    console.log(resData);
    return thunkAPI.fulfillWithValue(resData.data);
  }
);
//강아지 프로필 삭제
export const deleteDog = createAsyncThunk(
  "myPageSlice/deleteDog",
  async (payload, thunkAPI) => {
    const resData = await api_auth
      .delete(`/mypage/dogs/${payload}`)
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
      .catch((err) => console.log(err));
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
      .catch((err) => console.log(err));
    // console.log(resData.data.data.dogs[payload]);
    return thunkAPI.fulfillWithValue(resData.data.data.dogs);
  }
);
//닉네임 변경
export const editNick = createAsyncThunk(
  "myPageSlice/editNick",
  async (payload, thunkAPI) => {
    console.log(payload);
    const resData = await api_auth
      .patch(`/mypage/nick`, { nick: payload })
      .then((res) => res)
      .catch((err) => console.log(err));
    console.log(resData.data);
    return thunkAPI.fulfillWithValue(resData.data);
  }
);

const initialState = {
  myDogList: {},
  myPageInfo: { dogs: [] },
  myDogInfo: {},
  editNick: "",
};

export const myPageSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addDog.fulfilled, (state, action) => {
        state.myDogList = { ...action.payload };
        console.log({ ...action.payload });
      })
      .addCase(deleteDog.fulfilled, (state, action) => {
        state.myDogList = { ...action.payload };
        console.log({ ...action.payload });
      })
      .addCase(myPageInfo.fulfilled, (state, action) => {
        state.myPageInfo = { ...action.payload };
      })
      .addCase(myDogInfo.fulfilled, (state, action) => {
        state.myDogInfo = { ...action.payload };
        console.log([...action.payload]);
      })
      .addCase(editNick.fulfilled, (state, action) => {
        state.editNick = action.payload;
        console.log(action.payload);
      });
  },
});

export const {} = myPageSlice.actions;
export default myPageSlice.reducer;
