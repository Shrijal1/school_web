import React from "react";
import DashboardCarousel from "../../components/DashboardCarousel";
import Services from "../../components/Services";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import "../../assets/scss/home.scss";
import VideoPlayer from "../../components/VideoPlayer";
import DashboardVideo from "../../components/DashboardVideo";

const Home = () => {
  return (
    <div className="home-main">
      <DashboardVideo></DashboardVideo>
      <Services></Services>
      <Container>
        <Row>
          <Col>
            <h2>RIVIERA INTERNATIONAL ACADEMY</h2>
            <p style={{ color: "#979799" }}>
              Riviera International Academy is an educational institution where
              an optimal and safe learning environment exists for children.
              Riviera is the school you are looking for where the children take
              intellectual adventures, where they take a chance to stretch their
              mind, where academics include books and much more, where they make
              friends that last a lifetime, where learning happens all the time
              and where learning is fun...
            </p>
          </Col>
          <Col xs={6}>
            <VideoPlayer></VideoPlayer>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 mb-5 notice_section">
        <Row className="gap-4">
          <Col>
            <h2>Downloads</h2>
            <div className="list">
              <ul className="list_group">
                <li>
                  <a href="!#">First Term Exam Routine-2080</a>
                </li>
                <li>
                  <a href="!#">First Term Exam Routine 2080 : Class-wise</a>
                </li>
                <li>
                  <a href="!#">
                    First Term Exam Syllabus 2080 : Nursery-Grade V
                  </a>
                </li>
                <li>
                  <a href="!#">First Term Exam Syllabus : Grade 6 -9</a>
                </li>
                <li>
                  <a href="!#">School Calendar - 2080</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <h2>Notices</h2>
            <div className="list">
              <ul className="list_group">
                <li>
                  <a href="!#">First Term Exam Notice-2080</a>
                </li>
                <li>
                  <a href="!#">Grade 11 Exam Continues as per Exam Routine</a>
                </li>
                <li>
                  <a href="!#">Holiday on the Occasion of Bhoto Jatra</a>
                </li>
                <li>
                  <a href="!#">School Resumes from Baisakh 10, 2080</a>
                </li>
                <li>
                  <a href="!#">School Holiday Notice - Falgun 1</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <h2>News & Events</h2>
            <div className="scroller">
              <div className="scrolling_list">
                <h5>Activities of month</h5>
                <Row>
                  <Col xs={4}>
                    <b>Date</b>
                  </Col>
                  <Col xs={8}>
                    <b>Activities</b>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>12th</Col>
                  <Col xs={8}>
                    Briefing on National Rice Pudding Day in the Assembly.
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>12th</Col>
                  <Col xs={8}>
                    Briefing on National Rice Pudding Day in the Assembly.
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>12th</Col>
                  <Col xs={8}>
                    Briefing on National Rice Pudding Day in the Assembly.
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>12th</Col>
                  <Col xs={8}>
                    Briefing on National Rice Pudding Day in the Assembly.
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>12th</Col>
                  <Col xs={8}>
                    Briefing on National Rice Pudding Day in the Assembly.
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>12th</Col>
                  <Col xs={8}>
                    Briefing on National Rice Pudding Day in the Assembly.
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
