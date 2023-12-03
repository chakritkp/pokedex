import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import cardListReducer from "./slices/cardListSlice";

const store = configureStore({
    reducer: {
        cardList: cardListReducer,
    },
    middleware: [...getDefaultMiddleware(), thunk]
})

export default store