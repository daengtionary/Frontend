import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./modules/userSlice";
import detail from "./modules/detailSlice";
import main from "./modules/mainSlice";
import myPage from "./modules/myPageSlice";
import list from "./modules/listSlice";
import chat from "./modules/chatSlice";
import community from "./modules/communitySlice";

const rootReducer = combineReducers({ user, detail, main, myPage, list, chat, community });

const store = configureStore({ reducer: rootReducer });

export default store;
