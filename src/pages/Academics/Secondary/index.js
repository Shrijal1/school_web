import React from "react";
import ScrollingImage from "../../../components/ScrollingImage";
import PagesHero from "../../../components/PagesHero";
import { Col, Container, Row } from "react-bootstrap";

const Secondary = () => {
  return (
    <div>
      <PagesHero href="Riviera Secondary"></PagesHero>
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              The Secondary School at Riviera covers the classes from Nine to
              Twelve. Secondary education here makes the students highly
              competent in pursuing their higher degree education in even the
              challenging and competitive environment. Riviera instills in them
              academic knowledge, technical skills and leadership quality. The
              selected textbooks, best designed teaching learning system in
              best-suited and well-furnished classrooms with an easy access to
              resourceful library, science lab and computer lab are the factors
              supporting children to achieve their goals. Due to this, Riviera
              till date has 100 percent success in S.L.C. examinations with
              significant number of distinction achieving students. On account
              of the international networking with foreign schools, Rivierians
              are well accepted in different developed countries.
            </p>
          </Col>
        </Row>
      </Container>
      <ScrollingImage></ScrollingImage>
    </div>
  );
};

export default Secondary;
