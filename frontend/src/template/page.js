import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero/hero"
import { useStrapiComponents } from "../hooks/useStrapiComponents"

export const data = graphql`
  query page($id: String, $imagesIds: [String]) {
    strapiPages(id: { eq: $id }) {
      id
      name
      content
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

const Page = ({ data }) => {
  const pageContent = useStrapiComponents(
    data.strapiPages.content,
    data.allFile.nodes
  )
  return (
    <Layout>
      <Seo title="Le titre de la page" />
      <Hero />
      {pageContent.map((item, i) => (
        <item.strapi_component key={i} />
      ))}
    </Layout>
  )
}

export default Page
