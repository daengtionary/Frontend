// Redux import
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const emailDupCheckThunk = createAsyncThunk(
  "user/emailDupCheck",
  async (payload, thunkAPI) => {
    const resData = await api
      .get(`member/checkemail?email=${payload}`)
      .then((res) => res)
      .catch((error) => error);
    return thunkAPI.fulfillWithValue(resData.data);
  }
);

export const nickNameDupCheckThunk = createAsyncThunk(
  "user/nicknameDupCheck",
  async (payload, thunkAPI) => {
    const resData = await api
      .get(`/member/checknick?nick=${payload}`)
      .then((res) => res)
      .catch((error) => error);

    return thunkAPI.fulfillWithValue(resData);
  }
);

export const addUserThunk = createAsyncThunk(
  "use/addUser",
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`/member/signup`, payload)
      .then((res) => res)
      .catch((error) => error);

    return thunkAPI.fulfillWithValue(resData.data);
  }
);

export const signUserThunk = createAsyncThunk(
  "user/signUser",
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`member/login`, payload)
      .then((res) => res)
      .catch((error) => error);
      

    window.sessionStorage.setItem(
      "authorization",
      resData.headers["authorization"].split(" ")[1]
    );
    window.sessionStorage.setItem(
      "refresh-token",
      resData.headers["refresh-token"]
    );
    window.localStorage.setItem(
      "nick",
      resData.data.data.nick
    );
    window.localStorage.setItem(
      "email",
      resData.data.data.email
    );
    window.localStorage.setItem(
      "role",
      resData.data.data.role
    );
    window.localStorage.setItem(
      "memberNo",
      resData.data.data.memberNo
    );

    return thunkAPI.fulfillWithValue(resData.data);
  }
);

export const kakaoAuthThunk = createAsyncThunk(
  "user/kakaoLogin",
  async (payload, thunkAPI) => {
    const resData = await api
      .get(`/member/kakao?code=${payload.code}`)
      .then((res) => res);
    window.sessionStorage.setItem(
      "authorization",
      resData.headers["authorization"].split(" ")[1]
    );
    window.sessionStorage.setItem(
      "refresh-token",
      resData.headers["refresh-token"]
    );
    window.localStorage.setItem(
      "nick",
      resData.data.data.nick
    );
    window.localStorage.setItem(
      "email",
      resData.data.data.email
    );
    window.localStorage.setItem(
      "role",
      "USER"
    );
    window.localStorage.setItem(
      "memberNo",
      resData.data.data.memberNo
    );

    return thunkAPI.fulfillWithValue(resData.data);
  }
);

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    headerAction: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(kakaoAuthThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signUserThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { headerAction } = userSlice.actions;
export default userSlice.reducer;
