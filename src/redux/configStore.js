import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./modules/user";
import detail from './modules/detailSlice'
import main from "./modules/mainPage";

const rootReducer = combineReducers({ user, detail, main });

const store = configureStore({ reducer: rootReducer });

export default store;
