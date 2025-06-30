import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import "bootswatch/dist/materia/bootstrap.min.css";

import "@/styles/global.css";
import App from "@/App";
import store from "@/store";
import QueryProvider from "@/providers/query-provider";

const root = document.getElementById("root");

createRoot(root!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <QueryProvider>
                    <App />
                </QueryProvider>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
