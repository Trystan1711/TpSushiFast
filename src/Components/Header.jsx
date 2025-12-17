import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      className="main-navbar position-fixed top-0 start-0 w-100 site-header"
      style={{ zIndex: 1000 }}
    >
      <div className="container-fluid header-inner">
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <span className="brand-main">Sushi Fast
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto main-nav">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Accueil
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/liste"
              className={location.pathname === "/liste" ? "active" : ""}
            >
              Menus
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/apropos"
              className={location.pathname === "/apropos" ? "active" : ""}
            >
              À propos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
