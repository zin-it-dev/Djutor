import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

import { menu } from "@/services/constants/navigatiors";

const Footer: React.FC = () => {
    return (
        <Container as={"footer"}>
            <Row className="py-5 my-5 border-top">
                <Col lg={6} className="mb-3">
                    <Link
                        to={"/"}
                        className="title fw-bold fs-3 text-decoration-none mb-2 d-block"
                    >
                        Djutor
                    </Link>

                    <p className="text-body-secondary">
                        Presented &copy; {new Date().getFullYear()} by{" "}
                        <Link
                            className="text-decoration-none fw-bold"
                            to={"https://github.com/zin-it-dev"}
                            target="_blank"
                        >
                            ZIN
                        </Link>
                        . All Rights Reserved.
                    </p>
                </Col>
                <Col lg={3} className="mb-3">
                    <h5 className="title text-uppercase mb-3">Company</h5>{" "}
                    <ul className="nav flex-column">
                        {menu.map((m) => {
                            return (
                                <li key={m.name} className="nav-item mb-2">
                                    <Link
                                        to={m.path}
                                        className="nav-link p-0 text-body-secondary"
                                    >
                                        {m.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </Col>
                <Col lg={3} className="mb-3">
                    <h5 className="title text-uppercase mb-3">GET IN TOUCH</h5>{" "}
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a
                                href="#"
                                className="nav-link p-0 text-body-secondary"
                            >
                                Home
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
