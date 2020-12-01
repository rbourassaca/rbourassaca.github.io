import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import SEO from "../components/seo.js"
import Layout from "../components/layout.js"

export const query = graphql`
    query ($id: String) {
        wpPage(id: {eq: $id}) {
            title
            content
            isFrontPage
        }
    }
`

const wptemplate = ( {data} ) => {
    const page = data.wpPage
    return (
        <Layout>
            <SEO title={page.title} />
        </Layout>
    )
}

export default wptemplate