import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function DashboardHeader() {
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
        <div style={{ display: "flex", fontSize: 30 }}>
          <i className="material-icons" style={{ fontSize: 70 ,marginTop:5}}>
            local_dining
          </i>
          CookBook
        </div>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ alignItems: "right" }}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
