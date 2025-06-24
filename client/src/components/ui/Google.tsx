import React from "react";
import { signInWithPopup } from "firebase/auth";
import cookie from "react-cookies";
import { useNavigate } from "react-router";

import { auth, googleProvider } from "@/configs/firebase";
import { useAppDispatch } from "@/app/hooks";
import { logIn } from "@/app/slices/auth.slice";
import { getCurrentUser } from "@/services/user.service";

const Google: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
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

    return <button onClick={handleGoogleLogin}>🔐 Log In with Google</button>;
};

export default Google;
