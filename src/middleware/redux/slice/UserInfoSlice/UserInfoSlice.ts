import {createSlice} from '@reduxjs/toolkit'

const UserInfoSlice = createSlice({
    name:'UserInfo',
    initialState :{
        userInfo : [],
        userToken : '',
        userLogged: false,
        userOrder:{
            Order:[],
            Info:[],
            Total:0
        }

    },
    reducers: {
        setUserLoggedIn : (state,{payload}) => {
            state.userLogged = payload
        },
        setUserToken : (state,{payload}) => {
            state.userToken = payload
        },
        setUserInfo : (state,{payload}) => {
            state.userInfo = payload
        },
        setOrderCart : (state,{payload}) => {
            state.userOrder.Order = payload
        },
        setOrderInfo : (state,{payload}) => {
            state.userOrder.Info = payload
        },
        setOrderTotal : (state,{payload}) => {
            state.userOrder.Total = payload
        },


    }
})

export const {setUserToken,setUserInfo,setUserLoggedIn,setOrderCart,setOrderInfo,setOrderTotal} = UserInfoSlice.actions
export default UserInfoSlice.reducer