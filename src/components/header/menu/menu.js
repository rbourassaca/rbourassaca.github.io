import React from "react"
import { Navbar, Nav } from "react-bootstrap"

import "./menu.scss"

import NavBrand from "./navBrand"
import NavItem from "./navItem"

function Menu({siteTitle, menuItems}){
  return(
    <Navbar expand="lg">
      <NavBrand url="/" title={siteTitle} />
      <Navbar.Toggle aria-controls="links" />
      <Navbar.Collapse id="links">
          {menuItems.map((link, index) =>
            <Link link={link} key={index}/>
          )}
      </Navbar.Collapse>
    </Navbar>
  );
}

const Link = ({link}) => (
  <>
    <ul className="nav">
      <NavItem url={link.path}>{link.label}</NavItem>
    </ul>
  </>
)

export default Menu
