import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import myPokedexReducer from "./slices/myPokedexSlice";
import apiReducer from "./slices/apiSlice"

const reducer = {
    myPokedex: myPokedexReducer,
    api: apiReducer,
};

const preloadedState = {
    myPokedex: {
        items: JSON.parse(localStorage.getItem("myPokedex")) || [],
    },
};

export const store = configureStore({
    reducer,
    preloadedState,
    devTools: process.env.NODE_ENV === "development",
});

export const getStoreState = () => store.getState();
export const getDispatch = () => store.dispatch;
export const useAppDispatch = () => useDispatch();