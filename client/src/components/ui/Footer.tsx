import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

import { menu } from "@/services/constants/navigatiors";

const Footer: React.FC = () => {
    return (
        <footer className="bg-body-tertiary mt-5 border-top">
            <Container className="pt-5">
                <Row className="gy-4">
                    <Col
                        xs={12}
                        sm={6}
                        md={6}
                        className="text-center text-sm-start text-md-start"
                    >
                        <Link
                            to={"/"}
                            className="title fw-bold fs-3 text-decoration-none mb-2 d-block"
                        >
                            Djutor
                        </Link>

                        <p className="text-body-secondary mx-auto mx-sm-0 mx-md-0">
                            We provide healthcare solutions with a mission to
                            improve your life. Visit us or contact via any
                            channel below.
                        </p>
                    </Col>
                    <Col
                        xs={12}
                        sm={3}
                        md={3}
                        className="text-center text-sm-start text-md-start"
                    >
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
                    <Col
                        xs={12}
                        sm={3}
                        md={3}
                        className="text-center text-sm-start text-md-start"
                    >
                        <h5 className="title text-uppercase mb-3">
                            GET IN TOUCH
                        </h5>{" "}
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

                <div className="py-3 mt-4 border-top border-secondary-subtle">
                    <p className="mb-0 text-center small text-muted">
                        &copy; {new Date().getFullYear()} Djutor. Built by{" "}
                        <a
                            href="https://github.com/zin-it-dev"
                            className="text-decoration-none fw-bold"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ZIN
                        </a>
                        . All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
