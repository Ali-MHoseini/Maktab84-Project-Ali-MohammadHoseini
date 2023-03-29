import {createSlice, Draft,current} from '@reduxjs/toolkit'


const CartSlice = createSlice({
    name:'Cart',
    initialState  :{
        Cart : [],
        Total:0,
        isOrdering: false
    },
    reducers: {
        setProdCart : (state:Draft<any>,{payload}) : void => {
            if(state.Cart.length > 0) {
                let newData = state.Cart.find((item:any)=> item.data._id === payload._id)
                if (newData){
                    newData.number += 1
                    let newCart = state.Cart.filter((item:any)=> item.data._id !== payload._id)
                    state.Cart = [...newCart ,newData]
                }else{
                    state.Cart = [...state.Cart ,{data:payload,number:1}]
                }
                state.Total += payload.price
            }else{
                state.Cart = [...state.Cart ,{data:payload,number:1}]
                state.Total += payload.price
            }
        },
        decProdCart:(state:Draft<any>,{payload}) :void => {
                let Data = state.Cart.find((item:any)=> item.data._id === payload._id)
                if (Data.number > 0){
                    Data.number -= 1
                    let newCart = state.Cart.filter((item:any)=> item.data._id !== payload._id)
                    state.Cart = [...newCart ,Data]
                    state.Total -= payload.price
                }else{
                    Data.number = 1
                }
        },
        delProdCart:(state:Draft<any>,{payload}) :void => {
            let Data = state.Cart.find((item:any)=> item.data._id === payload._id)
            state.Total -= payload.price * Data.number
            let newCart = state.Cart.filter((item:any)=> item.data._id !== payload._id)
            state.Cart = [...newCart]
        },
        setIsOrdering:(state:Draft<any>,{payload}) :void => {
            state.IsOrdering = payload
        },
        removeItems:(state:Draft<any>) :void => {
            state.Cart = []
            state.Total = 0
            state.isOrdering = false
        }
    }
})

export const {setProdCart,decProdCart,delProdCart,setIsOrdering,removeItems} = CartSlice.actions
export default CartSlice.reducer