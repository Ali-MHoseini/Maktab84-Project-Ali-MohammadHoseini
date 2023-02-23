import {createSlice} from '@reduxjs/toolkit'

const UserInfoSlice = createSlice({
    name:'UserInfo',
    initialState :{
        userInfo : [],
        userToken : ''
    },
    reducers: {
        setUserToken : (state,{payload}) => {
            state.userToken = payload
        },
        setUserInfo : (state,{payload}) => {
            state.userInfo = payload
        },
    }
})

export const {setUserToken,setUserInfo} = UserInfoSlice.actions
export default UserInfoSlice.reducer