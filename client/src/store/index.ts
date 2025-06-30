import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/auth.slice";

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
