import React from "react";
import { auth, googleProvider } from "../../configs/firebase";
import { signInWithPopup } from "firebase/auth";

const Google: React.FC = () => {
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            const idToken = await user.getIdToken();
            console.log("User:", user);
            console.log("Firebase token:", idToken);
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return <button onClick={handleGoogleLogin}>🔐 Log In with Google</button>;
};

export default Google;
