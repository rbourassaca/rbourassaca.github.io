import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import SEO from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"

export const query = graphql`
    query ($id: String, $regex: String) {
        wpContentType(id: {eq: $id}) {
            label
            name
        }
        allFile(filter: {relativeDirectory: {regex: $regex}}){
            edges{
                node{
                    childImageSharp{
                        fluid(maxWidth: 3840, quality: 100){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

const wptemplate = ( {data} ) => {
    const archive = data.wpContentType
    const heroImages = data.allFile.edges

    return (
        <Layout>
            <SEO title={archive.label} />
            <Hero title={archive.label} background={heroImages}/>
        </Layout>
    )
}

export default wptemplate