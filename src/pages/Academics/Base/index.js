import React from "react";
import ScrollingImage from "../../../components/ScrollingImage";
import PagesHero from "../../../components/PagesHero";
import { Col, Container, Row } from "react-bootstrap";

const Base = () => {
  return (
    <div>
      <PagesHero href="BaSE (Basic School Education)"></PagesHero>
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <p style={{ color: "rgb(151, 151, 153)" }}>
              Basic School Education at Riviera covers from Grade One to Grade
              Eight of school education as recently designed by the government.
              The Riviera BaSE is fully handled by highly professional, well
              trained and experienced teachers. Riviera BaSE practices
              learners-centered value based education system. The school has
              adopted the 'putting students first' philosophy in its
              teaching-learning prospects. It helps them to explore their
              potentialities and to transfer the acquired knowledge into skill
              for achieving the best result. On the other hand, value based
              education educates children about their moral, social, and
              cultural values that makes them disciplined and responsible.
              Riviera Base is endowed with all the infrastructures and
              technologies that are used to make students competitive in a
              contemporary society. It has well furnished classrooms,
              full-fledged library, well-equipped science lab, computer lab with
              twenty-four hour access to internet and email facilities and
              necessary audiovisual aids for teaching and learning process.
              Riviera BaSE prepares students to take the challenge for
              leadership at all spheres of society amidst their contemporaries.
            </p>
          </Col>
        </Row>
      </Container>
      <ScrollingImage />
    </div>
  );
};

export default Base;
