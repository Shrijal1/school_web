import React from "react";
import ScrollingImage from "../../../components/ScrollingImage";
import PagesHero from "../../../components/PagesHero";
import { Col, Container, Row } from "react-bootstrap";

const BoardOfDirector = () => {
  return (
    <div>
      <PagesHero href="Board Of Director"></PagesHero>
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Riviera International Academy is an educational institution where
              an optimal and safe learning environment exists for children.
              Riviera creates an environment of educational excellence that
              prepares students for success in college and beyond. Riviera
              values intellectual challenge and academic achievement, creative
              and independent thinking, mutual respect between students and
              teachers, deep respect for each individual, and diversity.
              Riviera's destination is, in fact, the stage in which students
              become self-disciplined, self-reliant and self-confident.
            </p>
          </Col>
        </Row>
      </Container>
      <ScrollingImage></ScrollingImage>
    </div>
  );
};

export default BoardOfDirector;
