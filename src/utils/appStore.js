import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cartSlice";

const appStore = configureStore({
    //This is whole stores big reducer objects which holds reducers from slices
    reducer : {
        cart : cartReducer
    }
})

export default appStore;