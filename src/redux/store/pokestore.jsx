import {configureStore}  from "@reduxjs/toolkit";
import pokeReducer from "../reducer/pokeReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers ({
    pokeReducer
})
export const pokestore = configureStore({reducer: rootReducer});

