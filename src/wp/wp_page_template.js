import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import SEO from "../components/seo.js"
import Layout from "../components/layout.js"

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
    }
`

const wptemplate = ( {data} ) => {
    const page = data.wpContentNode
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
            <div dangerouslySetInnerHTML={{__html: page.content}} />
        </Layout>
    )
}

export default wptemplate