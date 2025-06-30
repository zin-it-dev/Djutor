import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router";
import cookie from "react-cookies";

import { auth, facebookProvider } from "@/configs/firebase";
import { useAppDispatch } from "@/store/hooks";
import { getCurrentUser } from "@/services/user.service";
import { logIn } from "@/store/slices/auth.slice";

const Facebook: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleFacebookLogin = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            const data = result.user;

            const idToken = await data.getIdToken();
            const user = await getCurrentUser(idToken);

            cookie.save("access_token", idToken, {
                path: "/",
                secure: true,
            });
            cookie.save("current_user", user, { path: "/", secure: true });

            dispatch(
                logIn({
                    token: idToken,
                    user: user,
                })
            );

            navigate("/");
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <button onClick={handleFacebookLogin}>🔐 Log In with Facebook</button>
    );
};

export default Facebook;
