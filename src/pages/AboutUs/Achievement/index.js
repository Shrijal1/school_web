import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ScrollingImage from "../../../components/ScrollingImage";

import PagesHero from "../../../components/PagesHero";

const Achievement = () => {
  return (
    <div>
      <PagesHero href="Achievement" />
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <p className="lead" style={{ color: "rgb(151, 151, 153)" }}>
              Riviera International Academy is an educational institution where
              an optimal and safe learning environment exists for children.
              Riviera is the school you are looking for where the children take
              intellectual adventures, where they take a chance to stretch their
              mind, where academics include books and much more, where they make
              friends that last a lifetime, where learning happens all the time
              and where learning is fun. Riviera develops the confident and
              resourceful individuals who lead satisfying and productive lives
              while contributing to their society, their country and their
              world. Small classes, dedicated teachers and personal attention
              make Riviera's education distinct.
            </p>
          </Col>
        </Row>
      </Container>
      <ScrollingImage></ScrollingImage>
    </div>
  );
};

export default Achievement;
