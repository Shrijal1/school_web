import React from "react";
import ScrollingImage from "../../../components/ScrollingImage";
import PagesHero from "../../../components/PagesHero";
import { Col, Container, Row } from "react-bootstrap";

const VisionMission = () => {
  return (
    <div>
      <PagesHero href="Vision & Mission"></PagesHero>
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="mb-2">Vision</h2>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Riviera is devoted to impart the kind of education to its students
              that activates their mind, heart and body simultaneously so as to
              help them in becoming perfect citizens to lead the nation.
            </p>
            <h2 className="mb-2">Mission</h2>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Riviera is devoted to impart the kind of education to its students
              that activates their mind, heart and body simultaneously so as to
              help them in becoming perfect citizens to lead the nation.
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <ScrollingImage></ScrollingImage>
    </div>
  );
};

export default VisionMission;
