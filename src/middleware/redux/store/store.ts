import { combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit";
import userInfo from "../slice/UserInfoSlice/UserInfoSlice";
import Product from "../slice/ProductSlice/ProductSlice"
import Cart from '../slice/CartSlice/CartSlice'

const rootReducer = combineReducers({
    userInfo,
    Product,
    Cart,
});

export const store = configureStore({
    reducer:rootReducer
})
