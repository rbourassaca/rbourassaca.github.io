import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"
import { useStrapiComponents } from "../hooks/useStrapiComponents"

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiFrontendSettings {
        logoBig {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      strapiHomePage {
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
      }
    }
  `)

  const pageContent = useStrapiComponents(data.strapiHomePage.content)

  return (
    <Layout>
      <Seo title={data.strapiHomePage.name} />
      <Hero
        logo={
          data.strapiFrontendSettings.logoBig.localFile.childImageSharp.fluid
        }
        background={
          data.strapiHomePage.featuredImage.localFile.childImageSharp.fluid
        }
      />
      {pageContent.map((item, i) => (
        <item.strapi_component key={i} />
      ))}
    </Layout>
  )
}

export default Index
