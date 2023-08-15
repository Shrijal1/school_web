import React from "react";
import ScrollingImage from "../../../components/ScrollingImage";
import PagesHero from "../../../components/PagesHero";
import { Col, Container, Row } from "react-bootstrap";

const Principal = () => {
  return (
    <div>
      <PagesHero href="From The Desk Of The Principal"></PagesHero>
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              In this age of globalization, students come across myriads of
              challenges. These challenges incorporate the problems that appear
              in their identity acknowledgement, psychological set up, mental
              structure, social adaptation, religious and cultural understanding
              and so on. The twenty-first century children have become too much
              materialistic which has instigated them to overlook the importance
              of their self. Absence of spiritualism and patriotism seems to
              have influenced today's children adversely leaving the trace of
              identity and cognition crisis in them. As such, in order to
              address these challenges, Riviera has introduced its academic
              programs that are geared towards making the students physically,
              mentally, psychologically, socially and spiritually upright for
              transforming them into globalized citizens and preparing them for
              leading the nation.
            </p>
            <span>
              <b>Prajwal Koirala</b>
            </span>
            <br />
            <span>
              <i>Principal</i>
            </span>
          </Col>
        </Row>
      </Container>
      <ScrollingImage></ScrollingImage>
    </div>
  );
};

export default Principal;
