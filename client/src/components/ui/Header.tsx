import React from "react";
import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    Offcanvas,
} from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router";

import { useAppSelector } from "@/app/hooks";
import useLogout from "@/hooks/useLogout";
import { menu } from "@/services/constants/navigatiors";

const Header: React.FC = () => {
    const expand: string = "lg";
    const navigate = useNavigate();
    const { handleSignOut } = useLogout();

    const user = useAppSelector((state) => state.auth.user);

    return (
        <Navbar
            expand={expand}
            bg={"body-tertiary"}
            variant="light"
            className="shadow-sm"
        >
            <Container>
                <Navbar.Brand
                    as={Link}
                    to={"/"}
                    className="title fw-bold fs-3 text-primary"
                >
                    Djutor
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title
                            id={`offcanvasNavbarLabel-expand-${expand}`}
                            className="title fw-bold fs-3 text-primary"
                        >
                            Djutor
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-center flex-grow-1 pe-3 text-uppercase">
                            {menu.map((m) => {
                                return (
                                    <Nav.Link
                                        key={m.name}
                                        as={NavLink}
                                        to={m.path}
                                    >
                                        {m.name}
                                    </Nav.Link>
                                );
                            })}
                        </Nav>
                        <Nav className="justify-content-end mb-2 mb-lg-0">
                            {user ? (
                                <>
                                    <span>Welcome, {user?.email}</span>
                                    <button onClick={handleSignOut}>
                                        Sign Out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        onClick={() => {
                                            navigate("/login");
                                        }}
                                        variant="primary"
                                    >
                                        Log In
                                    </Button>
                                </>
                            )}
                        </Nav>

                        <Form className="d-flex d-lg-none">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <Button variant="primary">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Header;
