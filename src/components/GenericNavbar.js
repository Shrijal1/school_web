import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import smallLogo from "../assets/images/riviera_logo_small.png";

const GenericNavbar = () => {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={smallLogo} alt="" className="border border-white rounded" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-2" href="/">
              Home
            </Nav.Link>

            <NavDropdown
              className="mx-2"
              title="About Us"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="intro">Introduction</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/visionmission">
                Vision & Mission
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/location">
                Location & Atmosphere
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/network">
                Network & Expectation
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/achievement">
                Our Achievement
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/principal">
                From the Desk of the Principal
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/bod">
                Board of Directors
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/teachers">
                Teachers & Staff
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="mx-2"
              title="Academics"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/kindergarten">
                Riviera Kindergarten
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/base">
                Riviera BaSE (Basic School Education)
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/secondary">
                Riviera Secondary School
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/plustwo">Riviera +2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="mx-2" href="/specials">
              Specials
            </Nav.Link>
            <Nav.Link className="mx-2" href="/glimpses">
              Some Glimpses
            </Nav.Link>
            <Nav.Link className="mx-2" href="/downloads">
              Downloads
            </Nav.Link>
            <Nav.Link className="mx-2" href="/newsevents">
              News & Events
            </Nav.Link>
            <Nav.Link className="mx-2" href="gallery">
              Gallery
            </Nav.Link>
            <Nav.Link className="mx-2" href="/contactus">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GenericNavbar;
