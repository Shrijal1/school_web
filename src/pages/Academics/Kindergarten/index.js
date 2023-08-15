import React from "react";
import ScrollingImage from "../../../components/ScrollingImage";
import PagesHero from "../../../components/PagesHero";
import { Col, Container, Row } from "react-bootstrap";

const Kindergarten = () => {
  return (
    <div>
      <PagesHero href="Kindergarten"></PagesHero>
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Riviera Kindergarten covers from Nursery to Upper Kindergarten
              (U.Kg.). It is duly designed with Montessori teaching-learning
              system. The classrooms and the settings are child-friendly,
              educative and knowledge-based. The Kindergarten teachers are
              trained on child psychology based teaching system which ensures
              the children's physical, emotional, social and cognitive
              development. They learn all the four language skills (Reading,
              Writing, Listening and Speaking) under highly caring and
              affectionate environment. Riviera Kindergarten is originated to
              explore knowledge and imagination, to develop oratory skill,
              positive attitude, patience and leadership with proper response to
              the curiosity of the children. One special Kids' Library and
              Tiffin Centre and the availability of sports and recreational
              materials are other feature of Riviera Kindergarten.
            </p>
          </Col>
        </Row>
      </Container>
      <ScrollingImage></ScrollingImage>
    </div>
  );
};

export default Kindergarten;
