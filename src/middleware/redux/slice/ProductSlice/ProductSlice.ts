import {createSlice} from '@reduxjs/toolkit'

const ProductSlice = createSlice({
    name:'Product',
    initialState :{
        Product : [],
    },
    reducers: {
        setProdStore : (state,{payload}) => {
            state.Product = []
            state.Product.push(payload)
        },

    }
})

export const {setProdStore} = ProductSlice.actions
export default ProductSlice.reducer