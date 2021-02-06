import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

export default function DashboardHeader({ handleLogout }) {
  return (
    <Navbar
      style={{
        backgroundColor: "#ffffff00",
        outline: "none",
        boxShadow: "none",
      }}
      variant="dark"
    >
      <Navbar.Brand>
        <div style={{ fontSize: 30 }}>CookBook</div>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item style={{ margin: 10 }}>Home</Nav.Item>
          <Nav.Item style={{ margin: 10 }}>Features</Nav.Item>
          <Nav.Item style={{ margin: 10 }}>
            <Button
              variant="outline-light"
              style={{
                borderRadius: "20px",
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
