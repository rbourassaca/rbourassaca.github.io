import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"

export const data = graphql `
    query($id: String, $maxWidth: Int=3840){
        wpContentNode(id: {eq: $id}) {
            ... on WpAudio{
                title
                featuredImage {
                    node {
                        localFile {
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                acf_audio{
                    nom
                    description
                    logicielsUtilise
                    roleDansLeProjet
                    type
                    liensProjet{
                        oembed
                    }
                    client{
                        ... on WpClient{
                            id
                            title
                        }
                    }
                }
            }
            ... on WpVideo{
                title
                featuredImage {
                    node {
                        localFile {
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
            ... on WpWeb{
               title
               featuredImage {
                node {
                    localFile {
                        childImageSharp{
                            fluid(maxWidth: $maxWidth){
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
            }
        }
    }
`

const WpProjectTemplate = ({data}) => {
    const title = data.wpContentNode.title
    var background

    if(data.wpContentNode.featuredImage != null){
        background = data.wpContentNode.featuredImage.node.localFile.childImageSharp.fluid;
    }

    return(
        <Layout>
            <SEO title={title} />
            <Hero title={title} background={background}/>
        </Layout>
    )
}

export default WpProjectTemplate