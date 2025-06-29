import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import jumbotron from "@/assets/images/Medicine-rafiki.svg";

const Jumbotron: React.FC = () => {
    return (
        <section className="px-3 px-md-4 py-4 my-3 my-lg-5 bg-primary rounded-5">
            <Container className="col-xxl-8 px-lg-4 px-1">
                <Row className="flex-lg-row-reverse align-items-center g-4 g-lg-5">
                    <Col lg={6} sm={9} xs={12} className="mx-auto">
                        <Image src={jumbotron} fluid />
                    </Col>
                    <Col
                        lg={6}
                        className="text-white text-center text-lg-start"
                    >
                        <h1 className="display-5 fw-bold lh-1 mb-3">
                            Book Appointment With Trusted Doctors
                        </h1>
                        <p className="fst-normal">
                            Simply browse through our extensive list of trusted
                            doctors, schedule your appointment hassle-free.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-center justify-content-lg-start">
                            {" "}
                            <Button
                                type="button"
                                variant="light"
                                className="px-4 w-100 w-md-auto rounded-5"
                            >
                                Booking appointment
                            </Button>{" "}
                            <Button
                                type="button"
                                variant="warning"
                                className="px-4 w-100 w-md-auto"
                            >
                                Create a account
                            </Button>{" "}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Jumbotron;
