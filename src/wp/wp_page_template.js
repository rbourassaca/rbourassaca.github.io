import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import SEO from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"

export const query = graphql`
    query ($id: String) {
        wpContentNode(id: {eq: $id}) {
            ... on WpPage {
              title
              content
              isFrontPage
            }
            ... on WpAudio {
                title
            }
            ... on WpClient {
                title
            }
            ... on WpVideo {
                title
            }
            ... on WpWeb {
                title
            }
            ... on WpMediaItem {
                title
            }
        }
        file(relativePath: {eq: "logo_big.png"}){
            childImageSharp{
                fluid(maxWidth: 1024, quality: 100){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        allFile(filter: {relativeDirectory: {regex: "/(hero)/"}}){
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
    const page = data.wpContentNode
    const logoBig = data.file.childImageSharp.fluid
    const heroImages = data.allFile.edges
    return (
        <Layout>
            {page.isFrontPage
                ?
                <>
                    <SEO title={page.title} />
                </>
                : 
                <>
                    <SEO title={page.title} />
                    <Container>
                        <h1>{page.title}</h1>
                    </Container>
                </>
            }
            <Hero logo={logoBig} background={heroImages}/>
            <div dangerouslySetInnerHTML={{__html: page.content}} />
        </Layout>
    )
}

export default wptemplate