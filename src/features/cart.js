import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    quantity: 0,
    price: 125.00,
    open: false,
    addToCart: false
})

export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addSneakers: (state, action) => {
            state.quantity++
        },
        removeSneakers: (state, action) => {
            if (state.quantity > 0) {
                state.quantity--
            }
        },
        openCart: (state, action) => {
            state.open = !state.open
        },
        addToCart: (state, action) => {
            state.addToCart = true
        },
        deleteCart: (state, action) => {
            state.quantity = 0
        }
    }
})

export const { addSneakers, removeSneakers, openCart, addToCart, deleteCart } = cart.actions
export default cart.reducer 