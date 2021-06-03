import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavbarBrand, NavItem } from "reactstrap";
export default function HeadingComponent() {
  return (
    <Navbar color="dark" dark>
      <NavbarBrand href="/" className="ml-5">
        Config Manager
      </NavbarBrand>
      <Nav className="ml-auto">
        <NavItem>
          <Link to="/sourcelist">Source List</Link>
        </NavItem>
          <NavItem>
              <Link to="/addvalidation">Add Validation</Link>
          </NavItem>
          <NavItem>
              <Link to="/login">Login</Link>
          </NavItem>
      </Nav>
    </Navbar>
  );
}
