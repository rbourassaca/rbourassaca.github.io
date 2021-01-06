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

    if(typeof(heroImages) === "object" && heroImages.length > 1){
        var background = heroImages[Math.floor((Math.random() * heroImages.length))].node.childImageSharp.fluid
    }else{
        var background = heroImages[0].node.childImageSharp.fluid
    }

    return (
        <Layout>
            <SEO title={archive.label} />
            <Hero title={archive.label} background={background}/>
        </Layout>
    )
}

export default wptemplate