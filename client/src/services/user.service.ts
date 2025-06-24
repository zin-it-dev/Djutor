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
        client_id: "0QJw8MJG92D5jwyGP59SOFSZkyNRuCPcL8xtvNS8",
        client_secret:
            "bg1JAJtw88cEwOjW4IGgtdkw8nO52dluzoZUyxf0iBfHaMdckVJAtgmxtVI09TBUarx5gvmX1NSoP7a7ASrVmSyKWcvrC1L4JJXqL33ZF5WCbeYPu9BO2WrqSFEwz7P3",
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
