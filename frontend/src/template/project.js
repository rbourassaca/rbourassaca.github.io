import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"
import ProjectInfo from "../components/projectInfo/projectInfo.js"

export const data = graphql`
  query project($id: String) {
    strapiProjects(id: { eq: $id }) {
      slug
      name
    }
  }
`

const Project = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Seo title={data.strapiProjects.name} />
      <Hero title={data.strapiProjects.name} />
    </Layout>
  )
}

export default Project
