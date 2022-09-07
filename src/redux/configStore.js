import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./modules/user";
import detail from "./modules/detailSlice";
import main from "./modules/mainSlice";
import myPage from "./modules/myPageSlice";
import list from "./modules/listSlice";

const rootReducer = combineReducers({ user, detail, main, myPage, list });

const store = configureStore({ reducer: rootReducer });

export default store;
