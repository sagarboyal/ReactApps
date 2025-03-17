import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./reducers/postReducer";


const initialState = {
    post: {
        post: [],
        loading: false,
        error: null
    }
};
export const store = configureStore({
    reducer: {
        post: postReducer
    },
    preloadedState: initialState
});