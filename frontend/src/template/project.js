import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"
import { useStrapiComponents } from "../hooks/useStrapiComponents.js"

export const data = graphql`
  query project($id: String, $imagesIds: [String]) {
    strapiProjects(id: { eq: $id }) {
      slug
      name
      content
      featuredImage {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      project_category {
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
    }
    allFile(filter: { id: { in: $imagesIds } }) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Project = ({ data }) => {
  const pageContent = useStrapiComponents(
    data.strapiProjects.content,
    data.allFile.nodes
  )

  let background
  if (data.strapiProjects.featuredImage !== null) {
    background =
      data.strapiProjects.featuredImage.localFile.childImageSharp.fluid
  } else {
    background =
      data.strapiProjects.project_category.featuredImage.localFile
        .childImageSharp.fluid
  }
  return (
    <Layout>
      <Seo title={data.strapiProjects.name} />
      <Hero title={data.strapiProjects.name} background={background} />
      {pageContent.map((item, i) => (
        <item.strapi_component key={i} />
      ))}
    </Layout>
  )
}

export default Project
