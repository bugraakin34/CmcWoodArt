import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cartItems: [],
    likeItems: [],
    orderItems: [],
    quantity: 1,
    total: 0,
};
  
const cartSlince = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart:(state) => {
            state.cartItems = [];
        },

        removeItem:(state, action) => {
            // console.log(action.payload);
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);

        },

        increase:(state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.quantity += 1;
        },

        decrease:(state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.quantity -= 1;
        },

        calculateTotal:(state) => {
            let total = 0;
            let quantity = 0;
            state.cartItems.forEach((item) => {
              total += item.quantity * item.price;
              quantity += item.quantity;
            });
            state.quantity = quantity;
            state.total = total;
        },

        addToCart: (state, action) => {
           const itemIndex = state.cartItems.findIndex(
            item => item.id === action.payload.id
            );

            if(itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            } else {
                const tempCartItem = {...action.payload, quantity:1};
                state.cartItems.push(tempCartItem);
            }
        },

        addToLike: (state, action) => {
            const itemsIndex = state.likeItems.findIndex(
             items => items.id === action.payload.id
             );
 
             if(itemsIndex >= 0) {
                 state.likeItems[itemsIndex].quantity = 1
             } else {
                 const tempCartItems = {...action.payload};
                 state.likeItems.push(tempCartItems);
             }
        },

        likeRemoveItem:(state, action) => {
            // console.log(action.payload);
            const itemsId = action.payload;
            state.likeItems = state.likeItems.filter((items) => items.id !== itemsId);
        },

        addToOrder: (state, action) => {
            const OrderIndex = state.orderItems.findIndex(
             order => order.id === action.payload.id
            );

            if(OrderIndex >= 0) {
                state.orderItems[OrderIndex].quantity = 1
            } else {
                const tempCartItems = {...action.payload};
                state.orderItems.push(tempCartItems);
            }
        },
    },
});


export const { clearCart, removeItem, increase, decrease, calculateTotal, addToCart, addToLike, likeRemoveItem,  addToOrder } = cartSlince.actions;


export default cartSlince.reducer;
