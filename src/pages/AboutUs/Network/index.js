import React from "react";
import ScrollingImage from "../../../components/ScrollingImage";
import PagesHero from "../../../components/PagesHero";
import { Col, Container, Row } from "react-bootstrap";

const Network = () => {
  return (
    <div>
      <PagesHero href="Network & Expectation"></PagesHero>
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="mb-2">Riviera's Network</h2>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Networking with international schools abroad along with wide range
              of exposures in the world market is another benefit of being a
              part of Riviera. In spite of such magnificent educational setting,
              Riviera is committed to provide an opportunity to the students
              from all social strata at an affordable fee.
            </p>
            <h2 className="mb-2">Riviera's Expectation</h2>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Riviera has the expectation that its existence in the academic
              arena with an exclusive vision and distinct mission will
              ultimately render optimum support to the prospective parents in
              wiping out all the illusions regarding their children's enrolment
              in a good school at Kathmandu.
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <ScrollingImage></ScrollingImage>
    </div>
  );
};

export default Network;
