import React from "react"
import { Navbar, Nav } from "react-bootstrap"

import NavBrand from "./navBrand"
import NavItem from "./navItem"

const Menu = ({siteTitle}) => (
  <Navbar bg="light" expand="lg">
    <NavBrand url="/" title={siteTitle} />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavItem url="/404">Test</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Menu
