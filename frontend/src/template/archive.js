import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"
import ProjectList from "../components/projectList/projectList.js"

export const data = graphql`
  query data($id: String, $slug: String) {
    strapiProjectCategories(id: { eq: $id }) {
      name
      featuredImage {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiProjects(filter: { project_category: { slug: { eq: $slug } } }) {
      nodes {
        slug
        name
        content
      }
    }
  }
`

const Archive = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.strapiProjectCategories.name} />
      <Hero
        title={data.strapiProjectCategories.name}
        background={
          data.strapiProjectCategories.featuredImage.localFile.childImageSharp
            .fluid
        }
      />
      <ProjectList projects={data.allStrapiProjects.nodes} />
    </Layout>
  )
}

export default Archive
