import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    items: [],
    status: null,
    error: null
};


export const productFetch = createAsyncThunk(
    "products/productsfetch",
    async () => {
            const response = await axios.get("https://fakestoreapi.com/products")
            return response?.data  
        },
       
    
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productFetch.pending]: (state, action) => {
            // immer
            state.status = "pending"
        },
        [productFetch.fulfilled]: (state, action) => {
            // immer
            state.status = "success"
        },
        [productFetch.rejected]: (state, action) => {
            // immer
            state.status = "rejected"
        }
    }
})
export default productsSlice.reducer