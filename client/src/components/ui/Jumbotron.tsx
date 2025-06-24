import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import jumbotron from "@/assets/images/Medicine-rafiki.svg";

const Jumbotron: React.FC = () => {
    return (
        <section className="px-lg-4 px-2 py-lg-4 py-3 my-lg-4 mt-3 bg-primary rounded-5">
            <Container className="col-xxl-8 px-lg-4 px-1">
                <Row className="flex-lg-row-reverse align-items-center g-5">
                    <Col lg={6} sm={9} xs={12}>
                        <Image src={jumbotron} />
                    </Col>
                    <Col lg={6} className="text-white">
                        <h1 className="display-5 fw-bold lh-1 mb-lg-3">
                            Book Appointment With Trusted Doctors
                        </h1>
                        <p className="fst-normal">
                            Simply browse through our extensive list of trusted
                            doctors, schedule your appointment hassle-free.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            {" "}
                            <Button
                                type="button"
                                variant="light"
                                className="px-4 me-md-2 rounded-5"
                            >
                                Booking appointment
                            </Button>{" "}
                            <Button
                                type="button"
                                variant="warning"
                                className="px-4"
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
