import React from "react";
import {
    Button,
    Container,
    Form,
    Image,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
} from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router";

import { useAppSelector } from "@/store/hooks";
import useLogout from "@/hooks/useLogout";
import { menu } from "@/services/constants/navigatiors";
import { formatFullName } from "@/utils/format";
import Topbar from "./Topbar";

const Header: React.FC = () => {
    const expand: string = "lg";
    const navigate = useNavigate();
    const { handleSignOut } = useLogout();

    const user = useAppSelector((state) => state.auth.user);

    return (
        <>
            <Topbar />
            <Navbar
                sticky="top"
                expand={expand}
                bg={"body-tertiary"}
                variant="light"
                className="shadow-sm"
            >
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to={"/"}
                        title={"Djutor"}
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
                                title={"Djutor"}
                                id={`offcanvasNavbarLabel-expand-${expand}`}
                                className="title fw-bold fs-3 text-primary"
                            >
                                Djutor
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="align-items-lg-center">
                            <Nav className="justify-content-center flex-grow-1 pe-3 text-uppercase">
                                {menu.map((m) => {
                                    return (
                                        <Nav.Link
                                            key={m.name}
                                            as={NavLink}
                                            to={m.path}
                                            title={m.name}
                                        >
                                            {m.name}
                                        </Nav.Link>
                                    );
                                })}
                            </Nav>
                            <Nav className="justify-content-end mb-2 mb-lg-0">
                                {user ? (
                                    <NavDropdown
                                        title={
                                            <span className="fw-medium fst-italic">
                                                Welcome,{" "}
                                                <Image
                                                    src={
                                                        user?.avatar ||
                                                        user?.photo
                                                    }
                                                    className="object-fit-cover"
                                                    alt={formatFullName(
                                                        user?.first_name,
                                                        user?.last_name
                                                    )}
                                                    title={formatFullName(
                                                        user?.first_name,
                                                        user?.last_name
                                                    )}
                                                    roundedCircle
                                                    thumbnail
                                                    height={40}
                                                    width={40}
                                                />
                                            </span>
                                        }
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item href="#action/3.1">
                                            Action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">
                                            Something
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            as={"button"}
                                            onClick={handleSignOut}
                                        >
                                            Sign Out
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <>
                                        <Button
                                            className="col-lg-12 col-6"
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
        </>
    );
};

export default Header;
