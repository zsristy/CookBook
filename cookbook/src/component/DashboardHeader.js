import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

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
      <Link to="/">
        <Navbar.Brand>
          <div style={{ fontSize: 30 }}>CookBook</div>
        </Navbar.Brand>
      </Link>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <Nav.Item style={{ margin: 10, fontSize: 15 }}>Profile</Nav.Item>
          </Link>

          <Link to="/addrecipies" style={{ textDecoration: "none" }}>
            <Nav.Item style={{ margin: 10, fontSize: 15 }}>
              <Icon name="plus square outline" />
              Add Recipe
            </Nav.Item>
          </Link>

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
