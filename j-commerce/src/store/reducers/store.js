import { configureStore } from "@reduxjs/toolkit"
import { productReducer } from "./productReducer";

const store = configureStore({
    reducer: {
        products: productReducer,
    },
    preloadedState: {},
});

export default store;