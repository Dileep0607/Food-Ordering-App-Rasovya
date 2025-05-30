import { createSlice } from "@reduxjs/toolkit";

{/** cartSlice is an big object inside store and it contains name,initial state of cart,
    reducers(actions)*/}
const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
        //reducer function(addItem,..) will take two parameters (state->initialState,action) 
        addItem : (state,action) => {
            state.items.push(action.payload);
            {/**
                Immer Library --> Similar to Virtual DOM in react
                Vanilla(Older) Redux ==> Dont Mutate(modify) state directly(pure functions)
                instead take a copy of original state and then modify that
                const newState = [...state];
                newState.items.push(action.payload) 
                return newState
            */}

            //Redux Tool Kit:
            //Immer Library --> Similar to reconcilation in react it finds the diff
            //we have to mutate(modifying) directly state over here
            //Redux uses immer library behind the scenes
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0 
            //return {items : []} -- > this new object will be replaced the originalstate with:{items : []}
            //To make cart empty we can also give "state.items = []" but we should not why?
            //Because it acts as the reference not the original state so it will only modify local variable value not the original state

        }
    }
})
//This is the syntax given to us by redux to export actions
export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;