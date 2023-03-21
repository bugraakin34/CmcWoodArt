import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../../ScreenDetails/CartControls';


const store = configureStore({
    reducer:{
      cart: cartReducer,
      like: cartReducer,
    },
})

export default store;
