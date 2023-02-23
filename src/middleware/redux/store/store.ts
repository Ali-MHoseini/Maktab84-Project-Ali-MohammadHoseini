import { combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit";
import userInfo from "../slice/UserInfoSlice/UserInfoSlice";


const rootReducer = combineReducers({
    userInfo,

});

export const store = configureStore({
    reducer:rootReducer
})
