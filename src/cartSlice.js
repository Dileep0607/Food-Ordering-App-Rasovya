import { createSlice } from "@reduxjs/toolkit";

{/** cartSlice is an big object inside store and it contains name,initial state of cart,
    reducers(actions)*/}
const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : ["Mango Lassi","OreoShake"]
    },
    reducers : {
        //reducer function(addItem,..) will take two parameters (state->initialState,action) 
        addItem : (state,action) => {
            state.items.push(action.payload);
            //mutating(modifying directly) state over here
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0 //To make cart empty we can also give "state.items = []" but we should not why?
        }
    }
})
//This is the syntax given to us by redux to export actions
export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;