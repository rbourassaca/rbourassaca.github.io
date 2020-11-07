import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu/menu"

const Header = ({ siteTitle }) => (
  <header>
    <Menu siteTitle={siteTitle} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
