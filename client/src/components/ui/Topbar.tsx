import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    FaEnvelope,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const Topbar: React.FC = () => {
    return (
        <div
            style={{ fontSize: "0.9rem" }}
            className="bg-primary py-2 border-bottom text-white shadow-sm"
        >
            <Container>
                <Row className="align-items-center gx-2 gy-1">
                    <Col xs={6} className="text-center text-md-start">
                        <Link
                            to={"tel:+84123456789"}
                            className="me-2 me-md-3 text-white text-decoration-none d-inline-block"
                        >
                            <FaPhoneAlt className="me-1" />
                            <span className="d-none d-sm-inline">
                                +84 123 456 789
                            </span>
                        </Link>
                        <Link
                            to={"mailto:info@hospital.com"}
                            className="text-white text-decoration-none d-inline-block"
                        >
                            <FaEnvelope className="me-1" />
                            <span className="d-none d-sm-inline">
                                info@hospital.com
                            </span>
                        </Link>
                    </Col>
                    <Col
                        xs={6}
                        className="text-center text-md-end mt-2 mt-md-0"
                    >
                        <Link
                            to="https://facebook.com"
                            className="me-3 text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook size={20} />
                        </Link>
                        <Link
                            to="https://twitter.com"
                            className="me-3 text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter size={20} />
                        </Link>
                        <Link
                            to="https://instagram.com"
                            className="text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram size={20} />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Topbar;
