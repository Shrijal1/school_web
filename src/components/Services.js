import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import kinder from "../assets/images/services/kindergarten.jpg";
import base from "../assets/images/services/base.jpg";
import secondary from "../assets/images/services/secondary.jpg";
import "../assets/scss/services.scss";

const Services = () => {
  return (
    <div>
      <Container>
        <h2
          className="d-flex justify-content-center mt-5"
          style={{ color: "#002366" }}
        >
          PROGRAMS
        </h2>
        <Row className="d-flex gap-5 mb-5 mt-5 ">
          <Card style={{ width: "18rem", backgroundColor: "#a3c7ff" }}>
            <Image className="mt-3" src={kinder} roundedCircle />
            <Card.Body>
              <Card.Title>Riviera Kindergarten</Card.Title>
              <Card.Text>
                Riviera Kindergarten covers from Nursery to Upper Kindergarten
                (U.Kg.). It is duly designed with Montessory teaching-learning
                system.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", backgroundColor: "#a3c7ff" }}>
            <Image className="mt-3" src={base} roundedCircle />
            <Card.Body>
              <Card.Title>Riviera BaSE (Basic School Education)</Card.Title>
              <Card.Text>
                Basic School Education at Riviera covers from Grade One to Grade
                Eight of school education as recently designed by the
                government.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", backgroundColor: "#a3c7ff" }}>
            <Image className="mt-3" src={secondary} roundedCircle />
            <Card.Body>
              <Card.Title>Riviera Secondary School</Card.Title>
              <Card.Text>
                The Secondary School at Riviera covers the classes from Eight to
                Ten.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", backgroundColor: "#a3c7ff" }}>
            <Image className="mt-3" src={base} roundedCircle />
            <Card.Body>
              <Card.Title>Riviera +2</Card.Title>
              <Card.Text>
                We offer +2 program with Science, Management, Law.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
