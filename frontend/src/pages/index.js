import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"

const Index = () => {
    const data = useStaticQuery(graphql`
        query {
            strapiFrontendSettings{
                logoBig{
                    localFile{
                        childImageSharp{
                            fluid{
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
            strapiHomePage {
                name
                content
                featuredImage{
                    localFile{
                        childImageSharp{
                            fluid{
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Seo title={data.strapiHomePage.name} />
            <Hero
                logo={data.strapiFrontendSettings.logoBig.localFile.childImageSharp.fluid}
                background={data.strapiHomePage.featuredImage.localFile.childImageSharp.fluid}
                social={[]} //TODO: Ajouter les liens vers les résaux sociaux
            />
        </Layout>
    )
}

export default Index