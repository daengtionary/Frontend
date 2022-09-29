import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./modules/userSlice";
import detail from "./modules/detailSlice";
import main from "./modules/mainSlice";
import myPage from "./modules/myPageSlice";
import list from "./modules/listSlice";
import chat from "./modules/chatSlice";
import trade from "./modules/tradeSlice";
import community from "./modules/communitySlice";
import place from "./modules/placeSlice";

const rootReducer = combineReducers({ user, detail, main, myPage, list, chat, community, trade, place });

const store = configureStore({ reducer: rootReducer });

export default store;
