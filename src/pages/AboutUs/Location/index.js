import React from "react";
import ScrollingImage from "../../../components/ScrollingImage";
import PagesHero from "../../../components/PagesHero";
import { Col, Container, Row } from "react-bootstrap";

const Location = () => {
  return (
    <div>
      <PagesHero href="Location & Atmosphere"></PagesHero>
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="mb-2">Location</h2>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Riviera is located at Maijubahal, Chabahil opposite the Hyatt
              Hotel's main gate where serenity persists, nature smiles and
              environment sings. It is easily accessible from many parts of
              Kathmandu as well as neighbouring districts Lalitpur and
              Bhaktapur.
            </p>
            <h2 className="mb-2">Riviera Atmosphere</h2>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Riviera creates an atmosphere that ensures knowing every student's
              intellect level and enhances students' ability to learn and
              encourages them to grow and lead. Students here are enlightened
              with cultural, social and psychological awakening for their
              overall personality development that makes them capable and
              responsible citizens. So, Riviera has diverse package of
              educational resources and programs with sound professionals. A
              child-friendly, disciplined, peaceful, enjoyable and homely
              learning environment coupled with all the modern infrastructures
              is available at the school.
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <ScrollingImage></ScrollingImage>
    </div>
  );
};

export default Location;
