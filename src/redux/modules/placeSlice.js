import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api_auth } from "../../shared/api";

//플레이스 등록
export const addPlaceThunk = createAsyncThunk("placeSlice/addPlaceThunk", async (payload, thunkAPI) => {
  console.log(payload);
  const formdata = new FormData();
  formdata.append(
    "data",
    new Blob([JSON.stringify(payload.data)], {
      type: "application/json;charset=UTF-8",
    })
  );
  for (let i = 0; i < payload.imgUrl.length; i++) {
    formdata.append("imgUrl", payload.imgUrl[i]);
  }

  for (const keyValue of formdata) console.log(keyValue);
  const resData = await api_auth
    .post(`/${payload.data.category}/create`, formdata, { "Content-Type": "image/*" })
    .then((res) => res)
    .catch((err) => console.log(err));
  console.log(resData);
  return thunkAPI.fulfillWithValue(resData.data);
});

const initialState = {
  placeInfoRes: {},
  isPosted: false,
};

export const placeSlice = createSlice({
  name: "place",
  initialState: initialState,
  reducers: {
    resetPosted(state) {
      state.isPosted = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addPlaceThunk.fulfilled, (state, action) => {
      state.placeInfoRes = action.payload;
      state.isPosted = true;

      console.log(action.payload);
    });
  },
});

export const { resetPosted } = placeSlice.actions;
export default placeSlice.reducer;
