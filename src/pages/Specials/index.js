import React from "react";
import ScrollingImage from "../../components/ScrollingImage";
import PagesHero from "../../components/PagesHero";
import { Col, Container, Row } from "react-bootstrap";

const Specials = () => {
  return (
    <div>
      <PagesHero href="Specials"></PagesHero>
      <Container className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <span className="mb-2">
              <b>Riviera Shuttle Service</b>
              <p style={{ color: "rgb(151, 151, 153)" }}>
                For those children who are residing somehow in distance from
                Riviera, Riviera provides transportation facilities in a nominal
                cost.
              </p>
            </span>
            <span className="mb-2">
              <b>Riviera Sports </b>
              <p style={{ color: "rgb(151, 151, 153)" }}>
                Besides regular sports activities within the school premises,
                Riviera has also managed Swimming and Horse Riding program for
                its students in a nominal additional cost.
              </p>
            </span>
            <span className="mb-2">
              <b>Riviera Recreation Class</b>
              <p style={{ color: "rgb(151, 151, 153)" }}>
                Riviera has facilitated its student's creativity to come out
                through music, dancing and painting class. All these class run
                regularly within school premises.
              </p>
            </span>
            <span className="mb-2">
              <b>Yoga & Meditation</b>
              <p style={{ color: "rgb(151, 151, 153)" }}>
                To promote inner enlightenment and keep sound mental and
                physical health among students, Riviera has been conducting
                regular yoga and meditation class.
              </p>
            </span>
            <span className="mb-2">
              <b>Riviera Health Program </b>
              <p style={{ color: "rgb(151, 151, 153)" }}>
                Riviera runs regular health education, tips and check up
                programs by medical personnel in school premises.
              </p>
            </span>
            <span className="mb-2">
              <b>Riviera Shuttle Service </b>
              <p style={{ color: "rgb(151, 151, 153)" }}>
                For those children who are residing somehow in distance from
                Riviera, Riviera provides transportation facilities in a nominal
                cost.
              </p>
            </span>
            <span className="mb-2">
              <b>Riviera Hostel </b>
              <p style={{ color: "rgb(151, 151, 153)" }}>
                Riviera provides hostel and day boarders service for its
                students in a well furnished, safe and well supervised
                accommodation with hygienic, healthy balanced food service.
                Hostel Students are facilitated with extra hour tuitions and
                mentoring.
              </p>
            </span>
            <span className="mb-2">
              <b>Riviera Food Court </b>
              <p style={{ color: "rgb(151, 151, 153)" }}>
                Riviera entertain its students and staff with best, safe,
                healthy and hygienic food service through its Food Court
                situated within the school premises. Non-Hostel students also
                can have foods from the Food Court in exchange of lunch coupon.
              </p>
            </span>
          </Col>
        </Row>
      </Container>
      <ScrollingImage></ScrollingImage>
    </div>
  );
};

export default Specials;
