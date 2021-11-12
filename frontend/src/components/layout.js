import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"

import Header from "./header/header"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query{
      strapiFrontendSettings{
        name
      }
      strapiMenu{
        items
      }
    }
  `)

  let menuItems = []
  data.strapiMenu.items.forEach(({project_category}) => {
    menuItems.push({
      path: `/${project_category.slug}`, 
      label: project_category.name
    })
  })

  return (
    <div className="d-flex flex-column" style={{minHeight: "100vh"}}>
      <Header siteTitle={data.strapiFrontendSettings.name} menuItems={menuItems} />
      <main className="flex-fill">{children}</main>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
