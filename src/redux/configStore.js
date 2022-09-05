import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './modules/user'
import detail from './modules/detailSlice'


const rootReducer = combineReducers({ user, detail });

const store = configureStore({ reducer: rootReducer });

export default store;