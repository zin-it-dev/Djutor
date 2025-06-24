import React from "react";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";

import Header from "../ui/Header";

const RootLayout: React.FC = () => {
    return (
        <>
            <Header />

            <Container as={"main"}>
                <Outlet />
            </Container>
        </>
    );
};

export default RootLayout;
