import {createSlice} from '@reduxjs/toolkit'

const ProductSlice = createSlice({
    name:'Product',
    initialState :{
        Product : [],
        AllProducts:[]
    },
    reducers: {
        setProdStore : (state,{payload}) => {
            state.Product = []
            state.Product = payload
        },
        setProds : (state,{payload}) => {
            state.AllProducts = []
            state.AllProducts= payload
        },

    }
})

export const {setProdStore,setProds} = ProductSlice.actions
export default ProductSlice.reducer