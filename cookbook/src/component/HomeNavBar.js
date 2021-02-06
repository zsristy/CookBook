import React from "react";
import { Navbar, Nav} from "react-bootstrap";

export default function HomeNavBar() {
  return (
    <Navbar
      style={{ backgroundColor: "black", outline: "none", position:"sticky"}}
      variant="dark"
    >
      <Navbar.Brand style={{fontSize:30}}>CookBook</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ml-auto" style={{alignItems:'right'}}>
        <Nav.Link href="#home">About Us</Nav.Link>
        <Nav.Link href="#features">Sign Up</Nav.Link>
      </Nav> 
      </Navbar.Collapse> 
    </Navbar>
  );
}