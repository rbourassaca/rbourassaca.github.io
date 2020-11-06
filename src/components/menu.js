import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

const Menu = ({siteTitle}) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      Raphael Bourassa
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/random" className="nav-link">404</Link>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Menu
