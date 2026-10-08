import { createSlice } from "@reduxjs/toolkit";
const grocerySlice = createSlice({
    name :'grocery',
    initialState:{
        items:[]
    },
    reducers: {
        addItem :(state,action)=>{
            // mutating the state here
            // redux toolkit uses immer
            state.items.push(action.payload)
            
            
        },
        removeItem :(state)=>{
            state.items.pop()
        },

        clearCart : (state)=>{
            state.items.length = 0
        }
    }
})

export const {addItem,removeItem,clearCart} = grocerySlice.actions
export default grocerySlice.reducer