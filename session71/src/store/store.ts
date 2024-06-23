import { configureStore } from "@reduxjs/toolkit";
import dung from "./reducers/CountReducer";

export const store =  configureStore({
    reducer:{
        count1111:dung,
    }
})