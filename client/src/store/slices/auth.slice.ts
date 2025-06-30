import type { User } from "@/types/user.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import cookie from "react-cookies";

export interface AuthState {
    token: string | null;
    user: User | null;
}

const initialState: AuthState = {
    token: cookie.load("access_token") || null,
    user: cookie.load("current_user") || null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<AuthState>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logOut: (state) => {
            cookie.remove("access_token");
            cookie.remove("current_user");
            state.token = null;
            state.user = null;
        },
    },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
