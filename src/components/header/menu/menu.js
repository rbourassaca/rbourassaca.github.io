import React from "react"
import { Navbar, Nav } from "react-bootstrap"

import NavBrand from "./navBrand"
import NavItem from "./navItem"

function Menu({siteTitle, menuItems}){
  return(
    <Navbar bg="light" expand="lg">
      <NavBrand url="/" title={siteTitle} />
      <Navbar.Toggle aria-controls="links" />
      <Navbar.Collapse id="links" className={menuStyles.centeredNav}>
        {menuItems.map((link, index) => 
          <Link link={link}/>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

const Link = ({link}) => (
  <>
    <Nav className="">
      <NavItem url={link.path}>{link.label}</NavItem>
    </Nav>
  </>
)

export default Menu
