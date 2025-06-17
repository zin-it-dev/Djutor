import React from "react";

import Google from "./components/ui/Google";
import Facebook from "./components/ui/Facebook";
import useLogout from "./hooks/useLogout";

const App: React.FC = () => {
    const { logOut } = useLogout();

    return (
        <div>
            <Google />
            <Facebook />
            <button onClick={logOut}>Sign Out</button>
        </div>
    );
};

export default App;
