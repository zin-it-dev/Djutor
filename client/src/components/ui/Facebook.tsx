import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, facebookProvider } from "../../configs/firebase";

const Facebook: React.FC = () => {
    const handleFacebookLogin = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            const user = result.user;

            const idToken = await user.getIdToken();
            console.log("Facebook User:", user);
            console.log("Firebase token:", idToken);
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <button onClick={handleFacebookLogin}>🔐 Log In with Facebook</button>
    );
};

export default Facebook;
