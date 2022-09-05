import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./modules/user";
import mainPage from "./modules/mainPage";

// const rootReducer = combineReducers({ user });

const store = configureStore({
  reducer: { user, mainPage },
});

export default store;
