import { signOut } from "firebase/auth";

import { auth } from "../configs/firebase";
import { useAppDispatch } from "@/app/hooks";
import { logOut } from "@/app/slices/auth.slice";

const useLogout = () => {
    const dispatch = useAppDispatch();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            dispatch(logOut());
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return { handleSignOut };
};

export default useLogout;
