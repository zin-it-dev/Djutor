import { useMutation } from "@tanstack/react-query";
import cookie from "react-cookies";

import { getCurrentUser, getToken } from "@/services/user.service";
import { useAppDispatch } from "@/app/hooks";
import { logIn } from "@/app/slices/auth.slice";

export const useLogin = () => {
    const dispatch = useAppDispatch();

    return useMutation({
        mutationFn: async (payload: { username: string; password: string }) => {
            const token = await getToken(payload);

            const user = await getCurrentUser(token.access_token);

            cookie.save("access_token", token.access_token, {
                path: "/",
                secure: true,
            });
            cookie.save("current_user", user, { path: "/", secure: true });

            dispatch(
                logIn({
                    token: token.access_token,
                    user: user,
                })
            );

            return { token: token.access_token, user: user };
        },
    });
};
