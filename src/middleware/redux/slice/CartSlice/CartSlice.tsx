import {createSlice, Draft} from '@reduxjs/toolkit'


const CartSlice = createSlice({
    name:'Cart',
    initialState  :{
        Cart : [],
        Total:0
    },
    reducers: {
        setProdCart : (state:Draft<any>,{payload}) : void => {
            state.Cart = [...state.Cart ,payload]
            state.Total += payload.price
        },


    }
})

export const {setProdCart} = CartSlice.actions
export default CartSlice.reducer