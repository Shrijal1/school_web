import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";
import FooterLogo from "../assets/images/footer/logo-ria-footer.png";

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <footer className="page-footer font-small text-light pt-4 mt-6 bg-primary">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <Container fluid>
              <Row>
                <Col xs={6} md={5}>
                  <Image src={FooterLogo} thumbnail />
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={4}>
                  <h4>Lead The Nation</h4>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={2}>
                  <a
                    href="https://www.facebook.com/rivierainternationalacademy/"
                    target="_blank"
                    className="text-decoration-none text-light"
                  >
                    <FaFacebook size={50} />
                  </a>
                </Col>
                <Col xs={6} md={2}>
                  <a
                    href="https://www.youtube.com/channel/UCmiFbGiu4yNyuuGIeVz-OaQ"
                    target="_blank"
                    className="text-decoration-none text-light"
                  >
                    <FaYoutube size={60} color="#CD201F" />
                  </a>
                </Col>
              </Row>
            </Container>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase d-flex align-items-left mb-3">
              Links
            </h5>
            <ul className="list-unstyled">
              <li className="list-group-item d-flex align-items-center mb-2">
                <a href="/intro" className="text-decoration-none text-light">
                  About
                </a>
              </li>
              <li className="list-group-item d-flex align-items-center mb-2">
                <a href="/specials" className="text-decoration-none text-light">
                  Specials
                </a>
              </li>
              <li className="list-group-item d-flex align-items-center mb-2">
                <a href="/gallery" className="text-decoration-none text-light">
                  Gallery
                </a>
              </li>
              <li className="list-group-item d-flex align-items-center mb-2">
                <a
                  href="/newsevents"
                  className="text-decoration-none text-light"
                >
                  News & Events
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase d-flex align-items-left mb-3">
              Contact Us
            </h5>
            <ul className="list-unstyled">
              <li className="list-group-item d-flex gap-2 align-items-center mb-3">
                <FaLocationDot />
                <a href="#!" className="text-decoration-none text-light">
                  Maijubahal, Chabahil, Kathmandu, Nepal
                </a>
              </li>
              <li className="list-group-item d-flex gap-2 align-items-center mb-3">
                <FaPhone />
                <a href="#!" className="text-decoration-none text-light">
                  977-1-4562223, 4585087
                </a>
              </li>
              <li className="list-group-item d-flex gap-2 align-items-center mb-3">
                <FaEnvelope />
                <a href="#!" className="text-decoration-none text-light">
                  info@riviera.edu.np
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © {getYear()} Copyright: Riviera International Academy
      </div>
    </footer>
  );
};

export default Footer;
