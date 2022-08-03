import { bsuirApi } from './bsuir/bsuir.api';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        [bsuirApi.reducerPath]: bsuirApi.reducer
    }
})