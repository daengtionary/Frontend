import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_auth } from "../../shared/api";

//강아지 프로필 등록
export const addDogThunk = createAsyncThunk("myPageSlice/addDogThunk", async (payload, thunkAPI) => {
  for (const keyValue of payload) console.log(keyValue);
  const resData = await api_auth
    .post(`/mypage/dogs`, payload, {})
    .then((res) => res)
    .catch((err) => console.log(err));
  console.log(resData);
  return thunkAPI.fulfillWithValue(resData.data);
});
//강아지 프로필 삭제
export const deleteDogThunk = createAsyncThunk("myPageSlice/deleteDogThunk", async (payload, thunkAPI) => {
  const resData = await api_auth
    .delete(`/mypage/dogs/${payload}`)
    .then((res) => res)
    .catch((err) => console.log(err));
  console.log(resData);
  return thunkAPI.fulfillWithValue(resData.data);
});
//강아지 프로필 이미지 삭제
export const deleteDogImgThunk = createAsyncThunk("myPageSlice/deleteDogImgThunk", async (payload, thunkAPI) => {
  const resData = await api_auth
    .delete(`/mypage/dogs/image/${payload}`)
    .then((res) => res)
    .catch((err) => console.log(err));
  console.log(resData);
  return thunkAPI.fulfillWithValue(resData.data);
});
//mypage get 테스트용
export const myPageInfoThunk = createAsyncThunk("myPageSlice/myPageInfoThunk", async (payload, thunkAPI) => {
  const resData = await api_auth
    .get(`/mypage/info`, payload)
    .then((res) => res)
    .catch((err) => console.log(err));
  return thunkAPI.fulfillWithValue(resData.data.data);
});
//mydog get 테스트용
export const myDogInfoThunk = createAsyncThunk("myPageSlice/myDogInfoThunk", async (payload, thunkAPI) => {
  const resData = await api_auth
    .get(`/mypage/info`, payload)
    .then((res) => res)
    .catch((err) => console.log(err));
  // console.log(resData.data.data.dogs[payload]);
  return thunkAPI.fulfillWithValue(resData.data.data.dogs);
});
//닉네임 변경
export const editNickThunk = createAsyncThunk("myPageSlice/editNickThunk", async (payload, thunkAPI) => {
  console.log(payload);
  const resData = await api_auth
    .patch(`/mypage/nick`, { nick: payload })
    .then((res) => res)
    .catch((err) => console.log(err));
  console.log(resData.data);
  return thunkAPI.fulfillWithValue(resData.data);
});

const initialState = {
  myDogList: {},
  myPageInfo: { dogs: [] },
  myDogInfo: {},
  editNick: "",
};

export const myPageSlice = createSlice({
  name: "myPage", //오류나면 여기 봐라
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addDogThunk.fulfilled, (state, action) => {
        state.myDogList = { ...action.payload };
        console.log({ ...action.payload });
      })
      .addCase(deleteDogThunk.fulfilled, (state, action) => {
        state.myDogList = { ...action.payload };
        console.log({ ...action.payload });
      })
      .addCase(deleteDogImgThunk.fulfilled, (state, action) => {
        state.myDogList = { ...action.payload };
        console.log({ ...action.payload });
      })
      .addCase(myPageInfoThunk.fulfilled, (state, action) => {
        state.myPageInfo = { ...action.payload };
      })
      .addCase(myDogInfoThunk.fulfilled, (state, action) => {
        state.myDogInfo = { ...action.payload };
        console.log([...action.payload]);
      })
      .addCase(editNickThunk.fulfilled, (state, action) => {
        state.editNick = action.payload;
        console.log(action.payload);
      });
  },
});

export const {} = myPageSlice.actions;
export default myPageSlice.reducer;
