import { signOut } from "firebase/auth";
import { auth } from "../configs/firebase";

const useLogout = () => {
    const logOut = async () => {
        try {
            await signOut(auth);
            alert("User signed out successfully");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return { logOut };
};

export default useLogout;
