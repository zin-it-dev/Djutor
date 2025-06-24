import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import "bootswatch/dist/materia/bootstrap.min.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "@/styles/global.css";
import App from "@/App";
import { queryClient } from "@/configs/queryClient";
import store from "@/app/store";

const root = document.getElementById("root");

createRoot(root!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <App />
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
