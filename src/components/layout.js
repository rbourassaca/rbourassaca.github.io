/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
const data = useStaticQuery(graphql`
    query {
      wp {
        generalSettings {
          title
        }
      }
      wpMenu(locations: {eq: GATSBY_HEADER_MENU}) {
        menuItems {
          nodes {
            label
            path
            id
          }
        }
      }
    }
  `)

  return (
    <div className="d-flex flex-column" Style="min-height:100vh;">
      <Header siteTitle={data.wp.generalSettings.title} menuItems={data.wpMenu.menuItems.nodes} />
      <main class="flex-fill">{children}</main>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
