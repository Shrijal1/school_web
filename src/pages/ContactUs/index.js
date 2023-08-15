import React from "react";
import ScrollingImage from "../../components/ScrollingImage";
import PagesHero from "../../components/PagesHero";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div>
      <PagesHero href="Contact Us"></PagesHero>
      <Container className="mt-5 mb-5">
        <Row>
          <Col xs={8}>
            <Container>
              <Form>
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Full Name "
                ></Form.Control>
                <Form.Control
                  className="mb-3"
                  type="email"
                  placeholder="Email Address"
                ></Form.Control>
                <Form.Control
                  className="mb-3"
                  type="number"
                  placeholder="Contact Number"
                ></Form.Control>
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Address"
                ></Form.Control>
                <Form.Control
                  className="mb-3"
                  as="textarea"
                  placeholder="Leave your message here"
                  rows={4}
                ></Form.Control>
                <Button variant="outline-primary">Submit</Button>
              </Form>
            </Container>
          </Col>
          <Col>
            <h3 style={{ color: "#002366" }}>
              <b>Contact Us</b>
            </h3>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Riviera International Academy
            </p>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Maijubahal, Chabahil, Kathmandu, Nepal
            </p>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Phone : 977-1-4562223, 4585087
            </p>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Email : info@riviera.edu.np
            </p>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Web : www.riviera.edu.np
            </p>
          </Col>
        </Row>
      </Container>
      <ScrollingImage></ScrollingImage>
    </div>
  );
};

export default ContactUs;
