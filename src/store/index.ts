import { UserAPI } from '../services/UserService';
import { bsuirApi } from './bsuir/bsuir.api';
import { configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        [bsuirApi.reducerPath]: bsuirApi.reducer,
        [UserAPI.reducerPath]: UserAPI.reducer
    },
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(UserAPI.middleware)
})