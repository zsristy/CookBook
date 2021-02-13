import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomeNavBar() {
  return (
    <Navbar
      style={{ backgroundColor: "black", outline: "none", position: "sticky" }}
      variant="dark"
    >
      <Navbar.Brand style={{ fontSize: 30 }}>CookBook</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item style={{ margin: 10 }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </Nav.Item>
          <Nav.Item style={{ margin: 10 }}>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Sign Up
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
