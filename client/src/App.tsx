import React from "react";
import { Routes, Route } from "react-router";

import RootLayout from "@/components/layouts/RootLayout";
import { publicRoutes } from "@/routes";

const App: React.FC = () => {
    return (
        <Routes>
            {publicRoutes.map((route, idx) => {
                return (
                    <Route key={idx} element={<RootLayout />}>
                        <Route
                            path={route.path}
                            element={<route.component />}
                        />
                    </Route>
                );
            })}
        </Routes>
    );
};

export default App;
