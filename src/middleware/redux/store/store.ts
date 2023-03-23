import { combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit";
import userInfo from "../slice/UserInfoSlice/UserInfoSlice";
import Product from "../slice/ProductSlice/ProductSlice"

const rootReducer = combineReducers({
    userInfo,
    Product,
});

export const store = configureStore({
    reducer:rootReducer
})
