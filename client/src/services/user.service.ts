import axios from "@/configs/axios";
import { END_POINTS } from "./constants/endpoints";

export type LogInPayload = {
    username: string;
    password: string;
};

export const getToken = async (payload: LogInPayload) => {
    const response = await axios.post(END_POINTS.token, {
        username: payload.username,
        password: payload.password,
        grant_type: "password",
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
    });

    return response.data;
};

export const getCurrentUser = async (accessToken: string) => {
    const response = await axios.get(END_POINTS.user, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return response.data;
};
