import { bsuirApi } from './bsuir/bsuir.api';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        [bsuirApi.reducerPath]: bsuirApi.reducer
    },
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(bsuirApi.middleware)
})